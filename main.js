var typed = new Typed(".text", {
    strings: [
        ".NET Full Stack Developer",
        "Angular Developer",
        "ASP.NET Core Developer",
        "AI Integration Developer",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.innerHTML = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

});

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuToggle.innerHTML = "☰";
        menuToggle.setAttribute("aria-expanded", "false");

    });

});
