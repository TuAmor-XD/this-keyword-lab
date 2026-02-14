const buttons = document.querySelectorAll('.color-btn');

// 1. Define a function called changeColor
function changeColor() {
  // Use 'this' to change only the clicked button
  this.style.backgroundColor = 'yellow';
}

// 2. Loop through buttons with forEach and attach the event listener
buttons.forEach(function(button) {
  button.addEventListener('click', changeColor);
});
