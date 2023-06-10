const navbarNav = document.querySelector(".navbar-nav");

// Jika Hamburger di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik Di luar sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.targer)) {
    navbarNav.classList.remove("active");
  }
});

// function changeBg() {
//   let navbar = document.getElementById("navbar");
//   let scrollValue = window.scrollY;

//   if (scrollValue < 150) {
//     navbar.classList.remove("bgColor");
//   } else {
//     navbar.classList.add("bgColor");
//   }
// }

// window.addEventListener("scroll", changeBg);
