// Variables & constants initialization and assignment
var trip_length = parseFloat(prompt('Please enter your trip distance in kilometers. ATTENTION! Use the dot "." instead of the comma "," for non-integer data.'));
var user_age = parseInt(prompt('Please enter your age.'));
const fare_per_km = 0.21;
const minor_discount_rate = 20;
const senior_discount_rate = 40;

// Data Information Check
console.log('********* DATA INFORMATION *********')
console.log('The \'fare_per_km\' data is a ' + typeof(fare_per_km) + '.');
console.log('The \'trip_length\' data is a ' + typeof(trip_length) + '.');
console.log('The \'user_age\' data is a ' + typeof(user_age) + '.');

// ******************** Ticket Price Calculation ********************
// Regular fare
var ticket_price = fare_per_km * trip_length;

if (!isNaN(user_age) && !isNaN(trip_length) && (trip_length > 0) && (user_age > 0)) {
  if (user_age < 18) {
    // Minor discount fare
    var discount = ((ticket_price * minor_discount_rate) / 100);
    discount = Math.round(discount * 100) / 100; //Rounding off to two figures
    ticket_price = Math.round((ticket_price - discount) * 100) / 100; //Rounding off to two figures
    console.log('The user is a Minor and receives a ' + minor_discount_rate + '% reduction on the regular fare.');
  } else if (user_age > 65) {
    // Senior discount fare
    discount = ((ticket_price * senior_discount_rate) / 100);
    discount = Math.round(discount * 100) / 100; //Rounding off to two figures
    ticket_price = Math.round((ticket_price - discount) * 100) / 100; //Rounding off to two figures
    console.log('The user is a Senior and receives a ' + senior_discount_rate + '% reduction on the regular fare.');
  } else {
    // Regular fare message
    ticket_price = Math.round((fare_per_km * trip_length) * 100) / 100;
    console.log('The user has no reduction on the regular fare.');
  }
} else {
  // Error message
  console.log('ERROR: Invalid value was entered for the user\'s age and/or the trip distance.');
}

// ******************** Output in Console ********************

// Train Ticket Information
console.log('********* TRAIN TICKET INFORMATION *********')
console.log('The fare per kilometer is ' + fare_per_km + ' €.');
console.log('The user\'s trip distance is ' + trip_length + ' kilometers.');
console.log('The user\'s age is ' + user_age + '.');
console.log('The discount on this train ticket is ' + discount + ' €.');
console.log('The final price for this trip is ' + ticket_price + ' €.');

// ******************** Output in HTML ********************
document.getElementById('user-age').innerHTML = user_age;
document.getElementById('fare-per-km').innerHTML = fare_per_km;
document.getElementById('trip-length').innerHTML = trip_length;
document.getElementById('ticket-price').innerHTML = ticket_price;

// Further information about the ticket fare
if (!isNaN(user_age) && !isNaN(trip_length) && (trip_length > 0) && (user_age > 0)) {
  if (user_age < 18) {
    // Minor discount message
    console.log('CONGRATULATIONS! Because of your age, you receive a ' + minor_discount_rate + '% reduction on this regular fare.');
    document.getElementById('discount-rate').innerHTML = ('CONGRATULATIONS! Because of your age, you receive a ' + minor_discount_rate + "&#37; reduction on this regular fare.");
    document.getElementById('discount-to-apply').innerHTML = ('The discount on your journey is ' + discount + " &euro;.");
  } else if (user_age > 65) {
    // Senior discount message
    console.log('CONGRATULATIONS! Because of your age, you receive a ' + senior_discount_rate + '% reduction on this regular fare.')
    document.getElementById('discount-rate').innerHTML = ('CONGRATULATIONS! Because of your age, you receive a ' + senior_discount_rate + "&#37; reduction on this regular fare.");
    document.getElementById('discount-to-apply').innerHTML = ('The discount on your journey is ' + discount + " &euro;.");
  } else {
    // No discount message
    console.log('Unfortunately there are no reductions on this regular fare for yor age group.');
    document.getElementById('discount-rate').innerHTML = ('Unfortunately there are no reductions on this regular fare for yor age group.');
  }
} else {
  // Error message
  console.log('ERROR: Invalid value was entered for the user\'s age and/or the trip distance.');
  document.getElementById('discount-rate').innerHTML = ('ERROR: Invalid value was entered for your age and/or your trip distance.');
  alert('ERROR: Invalid value was entered for the user\'s age and/or the trip distance. Please reload the page.');
}
