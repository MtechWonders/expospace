  	document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const candidateId = loginForm.elements["candidate_id"].value;
    const password = loginForm.elements["password"].value;
    // Check if credentials are correct
    if (candidateId === "33" && password === "s") {
      window.location.href = "home.html"; // Redirect to home page
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
});
