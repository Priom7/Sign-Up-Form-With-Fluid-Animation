// Create bubbles effect
function createBubbles() {
  const bubbles = document.getElementById("bubbles");
  const bubbleCount = 20;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    // Random bubble properties
    const size = Math.random() * 60 + 20;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 10;

    // Apply styles
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDelay = `${delay}s`;
    bubble.style.animationDuration = `${duration}s`;

    bubbles.appendChild(bubble);
  }
}

// Form switching functionality
document.addEventListener("DOMContentLoaded", function () {
  createBubbles();

  const loginToggle = document.getElementById("login-toggle");
  const signupToggle = document.getElementById("signup-toggle");
  const toggleIndicator = document.querySelector(".toggle-indicator");
  const authContainer = document.querySelector(".auth-container");

  // Toggle between forms
  loginToggle.addEventListener("click", function () {
    authContainer.classList.remove("show-signup");
    loginToggle.classList.add("active");
    signupToggle.classList.remove("active");
    toggleIndicator.style.left = "0";
  });

  signupToggle.addEventListener("click", function () {
    authContainer.classList.add("show-signup");
    signupToggle.classList.add("active");
    loginToggle.classList.remove("active");
    toggleIndicator.style.left = "50%";
  });

  // Form submit animations
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Add animation to the submit button
      const submitBtn = this.querySelector(".submit-btn");
      submitBtn.classList.add("clicked");

      // Here you would typically send form data to a server
      // Simulating a submission delay
      setTimeout(() => {
        submitBtn.classList.remove("clicked");
        // Show success notification or redirect
        alert("Form submitted successfully!");
      }, 1500);
    });
  });

  // Floating effect for form inputs
  const inputs = document.querySelectorAll(".form-control");

  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
    });
  });
});

// Ripple effect for buttons
document.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("submit-btn") ||
    e.target.classList.contains("social-btn")
  ) {
    const x = e.clientX - e.target.getBoundingClientRect().left;
    const y = e.clientY - e.target.getBoundingClientRect().top;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    e.target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
});
