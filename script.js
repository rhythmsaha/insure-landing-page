const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const mobileMenu = document.getElementById("mobileMenu");

openBtn.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    mobileMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    document.body.style.overflow = "auto";
    mobileMenu.classList.remove("open");
});
