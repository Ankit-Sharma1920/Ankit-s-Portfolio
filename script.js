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

        }

    });

});
