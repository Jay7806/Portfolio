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

//Email

function SendMail() {
  (function () {
    emailjs.init("k0h_8PYoavkFEQWJN");
  })();

  let params = {
    from_name: document.querySelector("#fullName").value,
    email_id: document.querySelector("#email_id").value,
    message: document.querySelector("#message").value,
  };

  let serviceId = "service_z3ltfad";
  let templateId = "template_s9rmxzp";

  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      alert("email sent");
    })
    .catch();
}

// function validate() {
//   let name = document.querySelector(".name");
//   let email = document.querySelector(".email");
//   let msg = document.querySelector(".message");
//   let sendBtn = document.querySelector(".send-btn");

//   sendBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (name.value === "" || email.value === "" || msg.value === "") {
//       emptyError();
//     } else {
//       sendMail(name.value, email.value, msg.value);
//       success();
//     }
//   });
// }
// validate();

// function sendMail(name, email, msg) {
//   emailjs.send("service_z3ltfad", "template_0rxfb08", {
//     from_name: email,
//     to_name: name,
//     message: msg,
//   });
// }

// function emptyError() {
//   swal({
//     title: "Error",
//     text: "Fields cannot be empty",
//     icon: "error",
//   });
// }
// function success() {
//   swal({
//     title: "Email sent successfully",
//     text: "Thank you for getting in touch!",
//     icon: "success",
//   });
// }
