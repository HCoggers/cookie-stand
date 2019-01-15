"use strict";

//set global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var table = document.getElementById('sales');
var allStores = [];

//make store constructor function
function CookieStore(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.hourlyCookies = [];
    this.dailyCookies = 0;
    allStores.push(this);
}

//create store instances
new CookieStore('1st and Pike', 23, 65, 6.3);
new CookieStore('Seatac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 38, 2.3);
new CookieStore('Alki', 2, 16, 4.6);

console.table(allStores);

//calculate simulated customer data
CookieStore.prototype.randomCustomersPerHour = function () {
    return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
};

//calculate simulated hourly sales data
CookieStore.prototype.randomHourlyCookies = function () {
    for (var i = 0; i < hours.length; i++) {
        this.hourlyCookies.push(Math.floor(this.randomCustomersPerHour() * this.avgCookiesPerCustomer));
        this.dailyCookies = this.dailyCookies + this.hourlyCookies[i]
    }
    console.log(`${this.name} sold ${this.dailyCookies} cookies today.`);
};

//render as a table row on sales.html
CookieStore.prototype.render = function () {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for (var i = 0; i < hours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.hourlyCookies[i];
        trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.dailyCookies;
    trEl.appendChild(tdEl);
    table.appendChild(trEl);
};

//render header
function salesHeader() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = '';
    trEl.appendChild(thEl);
    for (var i = 0; i < hours.length; i++) {
        thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
    thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);
    table.appendChild(trEl);
}

//call object functions
salesHeader();
for (var i = 0; i < allStores.length; i++) {
    allStores[i].randomCustomersPerHour();
    allStores[i].randomHourlyCookies();
    allStores[i].render();
}