const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieselect = document.getElementById('movie');
let ticketPrice = parseInt(movieselect.value);

// Update total price and seats
const UpdateSelectedCounter = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

// when changing the list of movies
movieselect.addEventListener('change', (eo) => {
  ticketPrice = +eo.target.value;
  UpdateSelectedCounter();
});

// Seats Clicked
container.addEventListener('click', (eo) => {
  if (
    eo.target.classList.contains('seat') &&
    !eo.target.classList.contains('occupied')
  ) {
    eo.target.classList.toggle('selected');
  }

  UpdateSelectedCounter();
});
