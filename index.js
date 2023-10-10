function nav() {
  let Projects = document.getElementById("Projects");
  let navbar = document.getElementById("main-nav");

  let navPos = navbar.getBoundingClientRect().top;

  window.addEventListener("scroll", (e) => {
    let scrollPos = window.scrollY;
    if (scrollPos > navPos) {
      navbar.classList.add("sticky");
      header.classList.add("navbarOffsetMargin");
    } else {
      navbar.classList.remove("sticky");
      header.classList.remove("navbarOffsetMargin");
    }
  });
}
function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener("click", () => {
  scrollToElement(".Header");
});
link2.addEventListener("click", () => {
  scrollToElement(".Projects");
});
link3.addEventListener("click", () => {
  scrollToElement(".About");
});
link4.addEventListener("click", () => {
  scrollToElement(".Contact");
});
