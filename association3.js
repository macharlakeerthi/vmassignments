"use strict";
exports.__esModule = true;
var association1_1 = require("./association1");
var association2_1 = require("./association2");
var customer = /** @class */ (function () {
    function customer(name) {
        this.name = name;
    }
    customer.prototype.getcustomerinfo = function () {
        console.log("welcome " + this.name);
    };
    return customer;
}());
var Customer = new customer('keerthi');
var Address = new association1_1.address('secunderabad');
var Bank = new association2_1.bank('BOI');
console.log(Customer.getcustomerinfo());
console.log(Address.getaddressinfo());
console.log(Bank.getbankinfo());
