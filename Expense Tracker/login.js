document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
  
    // Predefined user credentials
    const validUser = {
      username: "Nathiya",
      password: "nathiya@2005",
    };
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username === validUser.username && password === validUser.password) {
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "dashboard.html"; // Redirect to the main app
      } else {
        alert("Invalid Username or Password!");
      }
    });
  
    // Automatically redirect if already logged in
    if (localStorage.getItem("isLoggedIn")) {
      window.location.href = "dashboard.html";
    }
  });
  