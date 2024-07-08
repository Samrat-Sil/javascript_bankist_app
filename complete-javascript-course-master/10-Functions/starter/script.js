// const india = {
//   ariline: 'IndiGo',
//   code: 'A321',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.ariline} flight ${this.code} ${flightNum}`
//     );
//     this.booking.push({ flight: `${this.code} ${flightNum}` });
//   },
// };
// india.book(108, 'Samrat');
// // console.log(india);

// const westBengal = {
//   ariline: 'IndiGo',
//   code: 'A320',
//   booking: [],
// };
// const book = india.book;
// book.call(westBengal, 109, 'Gopal');
// westBengal.booking.push(book);
// // console.log(westBengal['booking']);

// const pune = {
//   ariline: 'IndiGo',
//   code: 'B777',
//   booking: [],
// };
// book.apply(pune, [102, 'Sam']);

// const bookpune= book.bind(pune);
// bookpune(103,"Bithika")

const secureBooking = function () {
  let passenger = 0;
  return function () {
    passenger++;
    console.log(`${passenger} passengers`);
  };
};
const booker = secureBooking();
booker();
