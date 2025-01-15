const loginForm = document.createElement("login-form");

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginBtn = document.querySelector(".login-btn");

  // Add loading state
  // loginBtn.classList.add("loading");
  // loginBtn.disabled = true;

  // check if username and password are a match the expected

  if (username === "silas" && password === "user321") {
    console.log("login success");
    // Redirect to index.html
    window.location.href = "merge.html";
  } else {
    console.log("login failed:");

    // display error message to user

    alert("Invalid username and/or password");
  }

  // clear the form fields
  document.getElementById("username").value = " ";
  document.getElementById("password").value = " ";
});
