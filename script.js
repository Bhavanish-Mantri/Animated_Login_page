const section = document.getElementById("grid");

const TOTAL_SPANS = 300;

for (let i = 0; i < TOTAL_SPANS; i++) {
  const span = document.createElement("span");
  section.appendChild(span);
}

/* LOGIN LOGIC */

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

const VALID_USER = "admin";
const VALID_PASS = "1234";

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!username.value || !password.value) {
    alert("Please fill all fields");
    return;
  }

  if (
    username.value === VALID_USER &&
    password.value === VALID_PASS
  ) {
    alert("Login Successful");
    console.log("User:", username.value);
  } else {
    alert("Invalid credentials");
  }
});
