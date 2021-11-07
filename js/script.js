new WOW().init();
const header = document.getElementById("sticky");

// Sticky Navbar

window.addEventListener("scroll", function () {
  if (window.innerWidth > 992) {
    let windowPosition = window.scrollY > 40;
    header.classList.toggle("bg-light", windowPosition);
    header.classList.remove("navbar-dark", windowPosition);
    header.classList.add("navbar-light", windowPosition);
    if (windowPosition == 0) {
      header.classList.remove("navbar-light", windowPosition);
      header.classList.add("navbar-dark", windowPosition);
    }
  }
});

// Show Whatsapp
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 260) scrollUp.classList.remove("show-whatsapp");
  else scrollUp.classList.add("show-whatsapp");
}
window.addEventListener("scroll", scrollUp);

// Collapse
$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);
