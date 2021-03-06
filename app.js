"use strict";

//set global variables
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var table = document.getElementById('sales');
var tableTwo = document.getElementById('staff');
var storeForm = document.getElementById('storeform');
var allStores = [];
var hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalsTotal = 0;

//make store constructor function
function CookieStore(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.hourlyCookies = [];
    this.dailyCookies = 0;
    this.hourlyTossers = [];
    allStores.push(this);
}

//use store constructor from user input
function newStore (event) {
    event.preventDefault();

    if (!event.target.storename.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcook.value) {
        return alert('Please fill out the entire form before submitting');
    }else if (parseInt(event.target.mincust.value) > parseInt(event.target.maxcust.value)) {
        return alert('Your maximum customers per hour must be higher than your minimum')
    }

    var inputName = event.target.storename.value;
    var inputMin = parseInt(event.target.mincust.value);
    var inputMax = parseInt(event.target.maxcust.value);
    var inputAvg = parseInt(event.target.avgcook.value);
    var isItNew = true;
    
    for (var i = 0; i < allStores.length; i++) {
        if (inputName === allStores[i].name) {
            allStores[i].minHourlyCustomers = inputMin;
            allStores[i].maxHourlyCustomers = inputMax;
            allStores[i].avgCookiesPerCustomer = inputAvg;
            isItNew = false;
        }
        allStores[i].hourlyCookies = [];
        allStores[i].hourlyTossers = [];
    }
    if (isItNew === true) {
        new CookieStore(inputName, inputMin, inputMax, inputAvg);
    }

    event.target.storename.value = '';
    event.target.mincust.value = '';
    event.target.maxcust.value = '';
    event.target.avgcook.value = '';

    table.textContent = '';
    tableTwo.textContent = '';
    totalsTotal = 0;
    for (var i = 0; i < hours.length; i ++){
        hourlyTotals[i] = 0;
    }
    renderSales();
    renderStaff();
    console.table(allStores);
}

storeForm.addEventListener('submit', newStore);

//create store instances
new CookieStore('1st and Pike', 23, 65, 6.3);
new CookieStore('Seatac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 38, 2.3);
new CookieStore('Alki', 2, 16, 4.6);

//calculate simulated customer data
CookieStore.prototype.randomCustomersPerHour = function () {
    return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
};

//calculate simulated hourly sales data
CookieStore.prototype.randomHourlyCookies = function () {
    for (var i = 0; i < hours.length; i++) {
        this.hourlyCookies.push(Math.floor(this.randomCustomersPerHour() * this.avgCookiesPerCustomer));
        hourlyTotals[i] += this.hourlyCookies[i];
        this.dailyCookies += this.hourlyCookies[i]
    }
    totalsTotal = totalsTotal + this.dailyCookies;
    console.log(`${this.name} sold ${this.dailyCookies} cookies today.`);
};

//calculate simulated hourly staffing data
CookieStore.prototype.randomHourlyTossers = function () {
    for (var i = 0; i < hours.length; i++) {
        var tossers = Math.ceil(this.hourlyCookies[i] / 20);
        if (tossers < 1){
            tossers += 2;
        }else if (tossers < 2){
            tossers++;
        }
        this.hourlyTossers.push(tossers);
    };
}

//render hourly staffing
CookieStore.prototype.renderTossers = function () {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);
    for (var i = 0; i < hours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.hourlyTossers[i];
        trEl.appendChild(tdEl);
    }
    tableTwo.appendChild(trEl);
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
function salesHeader(tablevar) {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = '';
    trEl.appendChild(thEl);
    for (var i = 0; i < hours.length; i++) {
        thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
    if (tablevar === table){
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Location Total';
    trEl.appendChild(thEl);
    }
    tablevar.appendChild(trEl);
}
//render footer
function salesFooter() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Totals';
    trEl.appendChild(tdEl);
    for(var i = 0; i < hours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = hourlyTotals[i];
        trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = totalsTotal;
    trEl.appendChild(tdEl);
    table.appendChild(trEl);
}

//render full sales table
function renderSales(){
    salesHeader(table);
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].randomCustomersPerHour();
        allStores[i].dailyCookies = 0;
        allStores[i].randomHourlyCookies();
        allStores[i].render();
    }
    salesFooter();
}

//render full staffing table
function renderStaff(){
    salesHeader(tableTwo);
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].randomHourlyTossers();
        allStores[i].renderTossers();
    }
}

renderSales();
renderStaff();
// console.table(allStores);