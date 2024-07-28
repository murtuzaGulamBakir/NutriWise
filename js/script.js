const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileNavLinksMenu = document.querySelector(".mobile-nav-links");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("open");
    mobileNavLinksMenu.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
});

Array.from(mobileNavLinks).forEach((link) => {
    link.addEventListener("click", () => {
        mobileNavLinksMenu.classList.remove("open");
        hamburgerIcon.classList.remove("open");
        document.body.classList.remove("no-scroll");
    });
});
