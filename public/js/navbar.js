document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle_btn");
  const navLinks = document.getElementById("nav-links");
  const toggleIcon = toggleBtn.querySelector("i");
  const navbar = document.getElementById("navbar");
  const langBtn = document.getElementById("lang-btn");
  const dropdown = document.getElementById("language-dropdown");
  const arrowIcon = document.getElementById("arrow-icon");

  // Handle Navbar toggle button click
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

  // Handle Language dropdown toggle
  langBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the click event from bubbling up to the document
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
      arrowIcon.innerHTML = "&#9660;";
    } else {
      dropdown.style.display = "block";
      arrowIcon.innerHTML = "&#9650;";
    }
  });

  // Handle Language selection
  dropdown.addEventListener("click", async function (e) {
    if (e.target.tagName === "LI" || e.target.tagName === "IMG") {
      const selectedElement = e.target.closest("li");
      const selectedLanguage = selectedElement.getAttribute("data-lang");
      const selectedText = selectedElement.textContent.trim();
      const flagSrc = selectedElement.querySelector(".flag-icon").src;

      langBtn.innerHTML =
        '<img src="' +
        flagSrc +
        '" alt="' +
        selectedText +
        '" class="flag-icon"> ' +
        selectedText +
        ' <span id="arrow-icon" class="arrow-icon">&#9660;</span>';
      dropdown.style.display = "none";

      await translatePage(selectedLanguage);
    }
  });

  // Function to handle adding/removing dark background on navbar
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // Initial check on page load
  handleNavbarScroll();

  // Handle page scroll to add/remove dark background on navbar
  window.addEventListener("scroll", handleNavbarScroll);

  // Close dropdown if clicked outside
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && !langBtn.contains(e.target)) {
      dropdown.style.display = "none";
      arrowIcon.innerHTML = "&#9660;";
    }
  });
});

// Translation function for Netlify function implementation
async function translateText(text, targetLanguage) {
  try {
    console.log("Sending text for translation:", text, "to", targetLanguage);
    const response = await fetch("/.netlify/functions/translate", {
      method: "POST",
      body: JSON.stringify({ text, targetLanguage }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Received translated text:", data.translatedText);
    return data.translatedText;
  } catch (error) {
    console.error("Error:", error);
    return text;
  }
}

// Translate the entire page based on the selected language
async function translatePage(targetLanguage) {
  const elementsToTranslate = document.querySelectorAll(
    "nav a, .submit-btn a, .logo, .hero-text h1, .hero-text p, .specialties-title, .specialties-text, .efficiency-title, .efficiency-text, .efficiency-description, .efficiency-btn, .main-title, .reviews-text, .reviewer-name, .reviewer-title, .blog-title, .blog-text, .blog-content a, .job-content a, .job-header button, .solutions h2, .solutions p, .solutions-text, .solutions-text-2, .solution-card h4, .solution-card p, .solutions-btn, .callback-section h2, .callback-section p, .callback-form label, .callback-btn, .footer h3, .footer p, .footer ul li a, .footer-copy"
  );

  for (let element of elementsToTranslate) {
    if (!element.classList.contains("no-translate")) {
      const originalText = element.textContent.trim();
      if (originalText) {
        const translatedText = await translateText(
          originalText,
          targetLanguage
        );
        element.textContent = translatedText;
      }
    }
  }
}
