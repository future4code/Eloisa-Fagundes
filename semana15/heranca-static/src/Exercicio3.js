"use strict";
// a. Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// RESPOSTA: Não, pois ela não tem um método atrelado ao password na classe pai.
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
var exercicio1_1 = require("./exercicio1");
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, email, name, password, creditCard, purchaseTotal) {
        if (purchaseTotal === void 0) { purchaseTotal = 0; }
        var _this = _super.call(this, id, email, name, password) || this;
        _this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        _this.creditCard = creditCard;
        _this.purchaseTotal = purchaseTotal;
        return _this;
    }
    Customer.prototype.getCreditCard = function () {
        return this.creditCard;
    };
    Customer.prototype.getPurchaseTotal = function () {
        return this.purchaseTotal;
    };
    return Customer;
}(exercicio1_1.User));
var myOtherAccount = new Customer("2", "fernanda@gmail.com", "Fernanda", "qwerty", "123 456 789", 200);
console.log(myOtherAccount.getId());
console.log(myOtherAccount.getEmail());
console.log(myOtherAccount.getName());
console.log('O número do cartão é ' + myOtherAccount.getCreditCard());
console.log('O total da compra é R$' + myOtherAccount.getPurchaseTotal());
