const sliding = () => {
  const length = document.querySelector("#length").value;
  document.querySelector("#pwlength").innerText = length;
}

const pressed = () => {
  let randomPassword = '';
  let chars = "";
  const length = document.querySelector("#length").value;
  const caps = document.querySelector("#caps").checked;
  const special = document.querySelector("#special").checked;
  const numbers = document.querySelector("#numbers").checked;
  const lowercase = document.querySelector("#lowercase").checked;

  if (lowercase) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }

  if (caps) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }

  if (numbers) {
    chars += "0123456789"
  }

  if (special) {
    chars += "!@#$%^&*()"

  }

  if (!chars) {
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
  }

  const getPassword = (length, chars) => {
    randomPassword
    var charactersLength = chars.length;
    for (var i = 0; i < length; i++) {
      randomPassword += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return randomPassword;
  }

  randomPassword = getPassword(length, chars);
  document.querySelector("#password").value = randomPassword;
}


const copyPassword = () => {
  let passwordField = document.querySelector("#password")
  // Select the text field
  // passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(passwordField.value);
}