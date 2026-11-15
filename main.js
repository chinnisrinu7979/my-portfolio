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
});

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {

    navbar.classList.toggle("active");

    const isOpen = navbar.classList.contains("active");

    menuToggle.innerHTML = isOpen
        ? '<i class="bi bi-x-lg"></i>'
        : '<i class="bi bi-list"></i>';

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close menu after clicking a navigation link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

        menuToggle.innerHTML = '<i class="bi bi-list"></i>';

        menuToggle.setAttribute("aria-expanded", "false");

    });

});
