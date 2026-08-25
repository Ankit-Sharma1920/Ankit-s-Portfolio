// =====================================================
// ANKIT SHARMA PORTFOLIO
// Simple JavaScript - no section hiding/animations
// =====================================================


// ================= MOBILE MENU =================

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("#nav-menu");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });


  const navigationLinks = navigation.querySelectorAll("a");

  navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });

  });

}


// ================= SMOOTH SCROLL =================

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});
