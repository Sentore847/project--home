const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");
const navButton = document.getElementById("navToggle");

const nav = document.querySelector(".nav");
const spanPhone = document.getElementById("star_phone");
const spanEmail = document.querySelector(".star_email");
const spanMessage = document.querySelector(".star_message");

phone.addEventListener("input", () => {
  if (phone.value !== "") {
    spanPhone.classList.add("zero_opacity");
  } else {
    spanPhone.classList.remove("zero_opacity");
  }
});

email.addEventListener("input", () => {
  if (phone.value !== "") {
    spanEmail.classList.add("zero_opacity");
  } else {
    spanEmail.classList.remove("zero_opacity");
  }
});

message.addEventListener("input", () => {
  if (phone.value !== "") {
    spanMessage.classList.add("zero_opacity");
  } else {
    spanMessage.classList.remove("zero_opacity");
  }
});

navButton.addEventListener("click", (event) => {
  event.preventDefault();

  nav.classList.toggle("show");
});
