"use strict";

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPikeUl = document.getElementById('firstandPike');

var firstPike = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    custPerHour: function(){
            return Math.floor((Math.random()*(this.maxCustomers - this.minCustomers)) + this.minCustomers);
    },
    hourlyCookies: []
};

for (var i = 0; i < hours.length; i++){
    firstPike.hourlyCookies.push(Math.floor(firstPike.custPerHour() * firstPike.avgCookies));
    console.log(firstPike.hourlyCookies[i]);
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${firstPike.hourlyCookies[i]} cookies`;
    firstPikeUl.appendChild(liEl);
}

// var seatac = {
//     minCustomers: 3,
//     maxCustomers: 24,
//     avgCookies: 1.2,
//     custPerHour: function(){
//         return Math.floor((Math.random()*(this.maxCustomers - this.minCustomers)) + this.minCustomers);
//     }
// };

// var seaCenter = {
//     minCustomers: 11,
//     maxCustomers: 38,
//     avgCookies: 3.7,
//     custPerHour: function(){
//         return Math.floor((Math.random()*(this.maxCustomers - this.minCustomers)) + this.minCustomers);
//     }
// };

// var capHill = {
//     minCustomers: 20,
//     maxCustomers: 38,
//     avgCookies: 2.3,
//     custPerHour: function(){
//         return Math.floor((Math.random()*(this.maxCustomers - this.minCustomers)) + this.minCustomers);
//     }
// };

// var alki = {
//     minCustomers: 2,
//     maxCustomers: 16,
//     avgCookies: 4.6,
//     custPerHour: function(){
//         return Math.floor((Math.random()*(this.maxCustomers - this.minCustomers)) + this.minCustomers);
//     }
// };