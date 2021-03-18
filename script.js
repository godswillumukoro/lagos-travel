const icon = document.querySelector(".fa-bars");
const navLink = document.querySelector(".mobile-nav-links");

icon.addEventListener('click', toggle);

function toggle() {
    if (navLink.style.display === "none") {
        navLink.style.display = "flex";
    }else{
        navLink.style.display = "none";
    }
}


