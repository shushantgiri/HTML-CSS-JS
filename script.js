// Toggle the menu when the hamburger button is clicked
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// "View More" buttons show a simple alert
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    alert("You clicked View More on card " + (index + 1));
  });
});
