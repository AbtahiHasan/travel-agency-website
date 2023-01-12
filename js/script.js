// select toggle icon
let toggleIcon = document.querySelector(".toggle-icon"),
navlinks = document.querySelector(".navlinks");
toggleIcon.onclick = () => {
    navlinks.classList.toggle("active");
}