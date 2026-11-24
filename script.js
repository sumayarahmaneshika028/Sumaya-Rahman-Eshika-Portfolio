/* SUMAYA RAHMAN ESHIKA — PORTFOLIO JAVASCRIPT
   Small interaction: close the mobile menu after choosing a section. */

const menuToggle = document.getElementById("nav-toggle");
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});
