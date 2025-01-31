const isVAlidCredentials = async (username, password) => {
  const expectedUsername = "Silas";

  const expectedPasswordHash =
    "54b08450a9dc275c13b7d032beb3080e9e87783f1d6afe69a2cd1fad81acf466";

  // Hash the input password before comparing
  const hashedPassword = await hashPassword(password);

  return (
    username === expectedUsername && hashedPassword === expectedPasswordHash
  );
};

// Simple SHA-256 hashing function
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

document
  .getElementById("login-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (await isVAlidCredentials(username, password)) {
      console.log("login success");
      localStorage.setItem("username", username);
      window.location.replace("./merge");
    } else {
      console.log("login failed");
      alert("Invalid username and/or password");
    }

    // clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
