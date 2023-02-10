let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
  slider.classList.add("moveslider");
  formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
  slider.classList.remove("moveslider");
  formSection.classList.remove("form-section-move");
});

const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const confirmPassword = document.getElementById("confirmPassword");
const usernameSignIn = document.getElementById("usernameLogIn");
const passwordSignIn = document.getElementById("passwordLogIn");

function validateSignUp() {
  if (
    username.value.trim() == "" ||
    password.value == "" ||
    email.value == "" ||
    confirmPassword.value == ""
  ) {
    alert("nuk lejohet te kete fusha te pa plotesuara");
  } else if (!email.value.includes("@")) {
    alert("fusha e emailit nuk permban @");
  } else if (!password.value.match(/\d/)) {
    alert("passwordi nuk permban numra");
  } else if (password.value !== confirmPassword.value) {
    alert("dy password-at nuk perputhen");
  }
}
function validateSignIn() {
  if (usernameSignIn.value.trim() == "" && passwordSignIn.value == "") {
    alert("te dy fushat jane te zbrazeta");
  } else if (usernameSignIn.value.trim() == "") {
    alert("pjesa e username eshte e zbrazet");
  } else if (passwordSignIn.value == "") {
    alert("pjesa e password eshte e zbrazet");
  }
}
