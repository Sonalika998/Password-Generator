function generatePassword() {
  let length = document.getElementById("length").value;

  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";

  if (length < 4) {
    alert("Password length must be at least 4");
    return;
  }

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  document.getElementById("result").value = password;
}
