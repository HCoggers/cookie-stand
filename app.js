"use strict";

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstPikeUl = document.getElementById('firstandpike');
var seatacUl = document.getElementById('seatac');
var seaCenterUl = document.getElementById('seacenter');
var capHillUl = document.getElementById('caphill');
var alkiUl = document.getElementById('alki');

var firstPike = {
    name: '1st and Pike',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    custPerHour: function () {
        return Math.floor((Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
    },
    hourlyCookies: [],
    printOnPage: function () {
        var totCookies = 0;
        for (var i = 0; i < hours.length; i++) {
            //calculate hourly cookies
            this.hourlyCookies.push(Math.floor(this.custPerHour() * this.avgCookies));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            //calculate total
            totCookies = totCookies + this.hourlyCookies[i];
            //print on webpage
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            firstPikeUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${totCookies} cookies`;
        firstPikeUl.appendChild(liTot);
    }
};


var seatac = {
    name: 'SeaTac Airport',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    custPerHour: function () {
        return Math.floor((Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
    },
    hourlyCookies: [],
    printOnPage: function () {
        var totCookies = 0;
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.custPerHour() * this.avgCookies));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            totCookies = totCookies + this.hourlyCookies[i];
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            seatacUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${totCookies} cookies`;
        seatacUl.appendChild(liTot);
    }
};


var seaCenter = {
    name: 'Seattle Center',
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    custPerHour: function () {
        return Math.floor((Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
    },
    hourlyCookies: [],
    printOnPage: function () {
        var totCookies = 0;
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.custPerHour() * this.avgCookies));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            totCookies = totCookies + this.hourlyCookies[i];
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            seaCenterUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${totCookies} cookies`;
        seaCenterUl.appendChild(liTot);
    }
};


var capHill = {
    name: 'Capitol Hill',
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    custPerHour: function () {
        return Math.floor((Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
    },
    hourlyCookies: [],
    printOnPage: function () {
        var totCookies = 0;
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.custPerHour() * this.avgCookies));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            totCookies = totCookies + this.hourlyCookies[i];
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            capHillUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${totCookies} cookies`;
        capHillUl.appendChild(liTot);
    }
};


var alki = {
    name: 'Alki',
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    custPerHour: function () {
        return Math.floor((Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
    },
    hourlyCookies: [],
    printOnPage: function () {
        var totCookies = 0;
        for (var i = 0; i < hours.length; i++) {
            this.hourlyCookies.push(Math.floor(this.custPerHour() * this.avgCookies));
            console.log(`${this.name} sold ${this.hourlyCookies[i]} cookies at ${hours[i]}`);
            totCookies = totCookies + this.hourlyCookies[i];
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.hourlyCookies[i]} cookies`;
            alkiUl.appendChild(liEl);
        }
        var liTot = document.createElement('li');
        liTot.textContent = `Total: ${totCookies} cookies`;
        alkiUl.appendChild(liTot);
    }
};

firstPike.printOnPage();
seatac.printOnPage();
seaCenter.printOnPage();
capHill.printOnPage();
alki.printOnPage();