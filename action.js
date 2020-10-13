/*
il prezzo del biglietto dipende dalla distanza da percorrere

è previsto uno sconto del 20% per il minorenni

gli over 65 hanno diritto ad uno sconto del 40%
*/

// Variables & constants initialization and assignment
var trip_length = parseInt(prompt('Please enter your trip distance in kilometers.'));
var user_age = parseInt(prompt('Please enter your age.'));
const fare_per_km = 0.21;

// Ticket price calculation
var ticket_price;

// Output in Console
console.log('Your trip distance is ' + trip_length + ' kilometers.');
console.log('Your age is ' + user_age + '.');
console.log('The fare per kilometer is ' + fare_per_km + '.');

// Output in HTML
