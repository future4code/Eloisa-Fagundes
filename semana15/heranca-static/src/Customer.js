"use strict";
// EXERCÍCIO 2
// a. Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal? 
// RESPOSTA: 1 vez, depois de imprimir  a chamada do construtor User.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// b. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?
// RESPOSTA: 2 vezes, na primeira chamada da classe pai e na segunda chamada do construtor da classe filha Customer.
var User_1 = require("./User");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, email, name, password, creditCard) {
        var _this = _super.call(this, id, email, name, password) || this;
        _this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        _this.creditCard = creditCard;
        return _this;
    }
    Customer.prototype.getCreditCard = function () {
        return this.creditCard;
    };
    return Customer;
}(User_1.User));
var myOtherAccount = new Customer("2", "fernanda@gmail.com", "Fernanda", "qwerty", "200");
console.log(myOtherAccount.getId());
console.log(myOtherAccount.getEmail());
console.log(myOtherAccount.getName());
console.log('O número do cartão é ' + myOtherAccount.getCreditCard());
// Exercício 4 
console.log(myOtherAccount.getIntroduceYourself());
