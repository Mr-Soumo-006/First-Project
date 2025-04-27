// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Typed.js initialization for hero text animation
  if (typeof Typed !== "undefined") {
    new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
    });
  }

  // Initialize AOS (Animate On Scroll) library
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
    });
  }

  // Back to Top button functionality
  const backToTop = document.getElementById("backToTop");

  // Show or hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Smooth scroll to top on button click
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
