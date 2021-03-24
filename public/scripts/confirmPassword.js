const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('As senhas não correspondem');
  } else {
    confirmPassword.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;