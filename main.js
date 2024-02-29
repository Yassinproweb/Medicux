const customers = document.querySelectorAll(".customer");
const pins = document.querySelectorAll(".pins");

pins.forEach((pin, index) => {
  pin.addEventListener('click', function() {
    // Remove the 'this' class from all buttons
    pins.forEach(btn => {
      btn.classList.remove('this');
    });

    // Add the 'this' class to the clicked button
    pin.classList.add('this');

    // Hide all customer reviews
    customers.forEach(customer => {
      customer.classList.remove('unhide');
    });

    customers[index].classList.add('unhide');
  });
});


// getting current year
let currentYear = new Date();

let thisYear = currentYear.getFullYear();

let dater = document.getElementById("date");
dater.textContent = thisYear;