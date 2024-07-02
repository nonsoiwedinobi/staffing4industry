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

// Language change 
document.getElementById("lang-btn").addEventListener("click", function () {
  var dropdown = document.getElementById("language-dropdown");
  var arrowIcon = document.getElementById("arrow-icon");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
    arrowIcon.innerHTML = "&#9660;";
  } else {
    dropdown.style.display = "block";
    arrowIcon.innerHTML = "&#9650;";
  }
});

document
  .getElementById("language-dropdown")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "LI" || e.target.tagName === "IMG") {
      var selectedLanguage = e.target.closest("li").textContent.trim();
      var flagSrc = e.target.closest("li").querySelector(".flag-icon").src;

      document.getElementById("lang-btn").innerHTML =
        '<img src="' +
        flagSrc +
        '" alt="' +
        selectedLanguage +
        '" class="flag-icon"> ' +
        selectedLanguage +
        ' <span id="arrow-icon" class="arrow-icon">&#9660;</span>';

      document.getElementById("language-dropdown").style.display = "none";

      if (selectedLanguage === "French") {
        // Logic to translate the page to French
      } else if (selectedLanguage === "Dutch") {
        // Logic to translate the page to Dutch
      } else {
        // Logic to revert to English
      }
      // Note: Implement translation logic here or use a translation API
    }
  });
