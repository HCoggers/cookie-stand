"use strict";

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPikeUl = document.getElementById('firstandpike');
var seatacUl = document.getElementById('seatac');
var seaCenterUl = document.getElementById('seacenter');
var capHillUl = document.getElementById('caphill');
var alkiUl = document.getElementById('alki');

var firstPike = {
    name: '1st and Pike',
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookiesPerCustomer: 6.3,
    hourlyCookies: [],
    dailyCookies: 0,
    randomCustomersPerHour: function () {
        return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
    },
    randomHourlyCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.randomCustomersPerHour() * this.avgCookiesPerCustomer));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            this.dailyCookies = this.dailyCookies + this.hourlyCookies[i];
        }
    },
    render: function () {
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            firstPikeUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${this.dailyCookies} cookies`;
        firstPikeUl.appendChild(liTot);
    }
};


var seatac = {
    name: 'SeaTac Airport',
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookiesPerCustomer: 1.2,
    hourlyCookies: [],
    dailyCookies: 0,
    randomCustomersPerHour: function () {
        return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
    },
    randomHourlyCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.randomCustomersPerHour() * this.avgCookiesPerCustomer));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            this.dailyCookies = this.dailyCookies + this.hourlyCookies[i];
        }
    },
    render: function () {
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            seatacUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${this.dailyCookies} cookies`;
        seatacUl.appendChild(liTot);
    }
};


var seaCenter = {
    name: 'Seattle Center',
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 3.7,
    hourlyCookies: [],
    dailyCookies: 0,
    randomCustomersPerHour: function () {
        return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
    },
    randomHourlyCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.randomCustomersPerHour() * this.avgCookiesPerCustomer));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            this.dailyCookies = this.dailyCookies + this.hourlyCookies[i];
        }
    },
    render: function () {
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            seaCenterUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${this.dailyCookies} cookies`;
        seaCenterUl.appendChild(liTot);
    }
};


var capHill = {
    name: 'Capitol Hill',
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookiesPerCustomer: 2.3,
    hourlyCookies: [],
    dailyCookies: 0,
    randomCustomersPerHour: function () {
        return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
    },
    randomHourlyCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.randomCustomersPerHour() * this.avgCookiesPerCustomer));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            this.dailyCookies = this.dailyCookies + this.hourlyCookies[i];
        }
    },
    render: function () {
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            capHillUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${this.dailyCookies} cookies`;
        capHillUl.appendChild(liTot);
    }
};


var alki = {
    name: 'Alki',
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookiesPerCustomer: 4.6,
    hourlyCookies: [],
    dailyCookies: 0,
    randomCustomersPerHour: function () {
        return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers)) + this.minHourlyCustomers);
    },
    randomHourlyCookies: function () {
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.randomCustomersPerHour() * this.avgCookiesPerCustomer));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            this.dailyCookies = this.dailyCookies + this.hourlyCookies[i];
        }
    },
    render: function () {
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            alkiUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${this.dailyCookies} cookies`;
        alkiUl.appendChild(liTot);
    }
};

firstPike.randomHourlyCookies();
seatac.randomHourlyCookies();
seaCenter.randomHourlyCookies();
capHill.randomHourlyCookies();
alki.randomHourlyCookies();

firstPike.render();
seatac.render();
seaCenter.render();
capHill.render();
alki.render();