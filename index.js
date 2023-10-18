const sidenav = document.getElementById("sidenav");
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const hamburger = document.getElementById("hamburger");

sidebarToggle.addEventListener("click", () => {
    sidebar.style.display = "block";
    sidenav.style.display = "none";
});

hamburger.addEventListener("click", () =>{
    sidenav.style.display = "block";
    sidebar.style.display = "none";

});

// Get the popup and the button that opens it
// var popup = document.getElementById("popup");
// var popupButton = document.getElementById("popupButton");
// var closeBtn = document.querySelector(".close");

// // Function to open the popup
// popupButton.onclick = function() {
//   popup.style.display = "block";
// };

// // Function to close the popup
// closeBtn.onclick = function() {
//   popup.style.display = "none";
// };

// // Close the popup if the user clicks outside of it
// window.onclick = function(event) {
//   if (event.target == popup) {
//     popup.style.display = "none";
//   }
// };

// Get all elements with the class 'popupButton'
var popupButtons = document.querySelectorAll('.popupButton');
var popup = document.getElementById('popup');
var closeBtn = document.querySelector('.close');

// Function to open the popup
popupButtons.forEach(function(button) {
    button.onclick = function() {
        popup.style.display = 'block';
    };
});

// Function to close the popup
closeBtn.onclick = function() {
    popup.style.display = 'none';
};

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
};

