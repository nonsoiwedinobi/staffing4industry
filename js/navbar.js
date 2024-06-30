// Navbar.js
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle_btn");
  const navLinks = document.getElementById("nav-links");
  const toggleIcon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    // Toggle between bars and close icons
    if (navLinks.classList.contains("active")) {
      toggleIcon.classList.remove("fa-bars");
      toggleIcon.classList.add("fa-times");
    } else {
      toggleIcon.classList.remove("fa-times");
      toggleIcon.classList.add("fa-bars");
    }
  });
});

