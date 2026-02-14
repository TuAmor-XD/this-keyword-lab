const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
  // Arrow functions do not create their own 'this'. Instead, 'this' is inherited
  // from the surrounding lexical scope, which is not the clicked element here.
  // Because of that, this.classList is undefined and throws an error.

  // event.currentTarget refers to the element the event listener is attached to.
  // This gives us the exact element that 'this' would represent in a regular
  // function handler, allowing us to safely modify its class list.
  event.currentTarget.classList.add('active');
});
