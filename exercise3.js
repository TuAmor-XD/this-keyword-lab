const display = document.querySelector('#count-display');

const CounterApp = {
  count: 0,

  increment: function() {
    // increase the object's count
    this.count++;

    // update the number shown in the DOM
    display.textContent = this.count;
  },

  decrement: function() {
    // decrease the object's count
    this.count--;

    // update the number shown in the DOM
    display.textContent = this.count;
  }
};

// attach increment with .bind() so 'this' stays the CounterApp object
document.querySelector('#inc-btn').addEventListener('click', CounterApp.increment.bind(CounterApp));

// attach decrement with .bind() so 'this' stays the CounterApp object
document.querySelector('#dec-btn').addEventListener('click', CounterApp.decrement.bind(CounterApp));
