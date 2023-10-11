window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("main-nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
function scrollToElement(elementSelector, instance = 0) {
  console.log("Scrolling to", elementSelector);

  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener("click", (e) => {
  console.log("Link 1 clicked");

  scrollToElement("#Header");
});
link2.addEventListener("click", (e) => {
  console.log("Link 2 clicked");

  scrollToElement("#Projects");
});
link3.addEventListener("click", (e) => {
  scrollToElement("#About");
});
link4.addEventListener("click", (e) => {
  scrollToElement("#Contact");
});
