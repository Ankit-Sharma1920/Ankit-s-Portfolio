/* =========================================
   ANKIT SHARMA PORTFOLIO
   JavaScript
   ========================================= */


/* ================= MOBILE MENU ================= */

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector("#nav-menu");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

  });


  document.querySelectorAll("#nav-menu a").forEach((link) => {

    link.addEventListener("click", () => {

      navigation.classList.remove("open");

    });

  });

}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
  ".section, .skill-card, .timeline-item, .project-card, .cert-card, .experience-card"
);


const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform = "translateY(20px)";

  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(element);

});


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("main section[id]");

const navLinks = document.querySelectorAll("nav a");


const sectionObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        navLinks.forEach((link) => {

          link.classList.remove("active");

        });


        const activeLink = document.querySelector(
          `nav a[href="#${entry.target.id}"]`
        );


        if (activeLink) {

          activeLink.classList.add("active");

        }

      }

    });

  },

  {
    rootMargin: "-35% 0px -55% 0px"
  }

);


sections.forEach((section) => {

  sectionObserver.observe(section);

});


/* ================= CURRENT YEAR ================= */

const year = new Date().getFullYear();

const footerYear = document.querySelector("footer span");

if (footerYear) {

  footerYear.textContent = `© ${year} Ankit Sharma`;

}
