// ================= MOBILE MENU =================

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


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      history.pushState(null, "", targetId);
    }

  });
});


// ================= SCROLL ANIMATION =================

const animatedElements = document.querySelectorAll(
  ".section, .skill-card, .timeline-item, .project-card, .cert-card, .experience-card"
);

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.08
  }
);


// IMPORTANT:
// Elements remain visible even if JavaScript animation
// doesn't run.

animatedElements.forEach((element) => {

  element.classList.add("animate");

  observer.observe(element);

});


// ================= ACTIVE NAVIGATION =================

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
    rootMargin: "-30% 0px -60% 0px"
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
