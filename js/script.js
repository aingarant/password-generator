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


  var charactersLength = chars.length;
  for (var i = 0; i < length; i++) {
    randomPassword += chars.charAt(Math.floor(Math.random() * charactersLength));

  }
  document.querySelector("#password").value = randomPassword;
  return randomPassword;


}


const copyPassword = () => {
  let passwordField = document.querySelector("#password")

  if (!passwordField.value) {
    pressed()
  }

  passwordField.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordField.value);
  const modal = document.querySelector(".modal");
  modal.style.display = "block";

  const modalContent = document.querySelector(".modal-content");
  modalContent.onclick = function () {
    modal.style.display = "none";
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}






