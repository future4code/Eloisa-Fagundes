"use strict";
// a. Seria possível imprimir a senha (`password`) atrelada a essa instância?
// RESPOSTA: Não. Pois não tem um método que chame a instância do password. Para que ele funcionar é possível acrescentar um método password.
exports.__esModule = true;
// b. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
// RESPOSTA: 1 vez.
var User = /** @class */ (function () {
    function User(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
var myAccount = new User("1", "eloisa@gmail.com", "Eloisa", "qwerty");
console.log(myAccount.getId());
console.log(myAccount.getEmail());
console.log(myAccount.getName());
