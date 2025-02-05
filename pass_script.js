function checkPassword() {
    const password = "08.02.2025"; // Set your password here
    const input = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
  
    if (input === password) {
      window.location.href = "index.html"; // Redirect to the main page
    } else {
      errorMessage.classList.remove("hidden"); // Show error message
    }
  }