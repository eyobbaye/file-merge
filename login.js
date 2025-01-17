const loginForm = document.createElement("login-form");

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginBtn = document.getElementById("login-btn");

  // check if username and password are a match the expected

  if (username === "Silas" && password === "user321") {
    console.log("login success");
    localStorage.setItem("username", username);
    // Redirect to index.html
    // window.history.pushState({}, "", "/merge");

    window.location.replace("merge.html");
  } else {
    console.log("login failed:");

    // display error message to user

    alert("Invalid username and/or password");
  }

  // clear the form fields
  document.getElementById("username").value = " ";
  document.getElementById("password").value = " ";
});
