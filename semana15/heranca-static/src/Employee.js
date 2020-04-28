"use strict";
// Exercício 6
// a. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
// RESPOSTA: Duas vezes. A primeira vez no chamado da classe pai e a segunda vez no construtor da casse filho. 
// b. Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?
// RESPOSTA: Os dados que vem da classe pai (id, e-mail e name) e os dados dessa classe (admissionDate e baseSalary)
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
var User_1 = require("./User");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, email, name, password, admissionDate, baseSalary) {
        var _this = _super.call(this, id, email, name, password) || this;
        _this.admissionDate = admissionDate;
        _this.baseSalary = baseSalary;
        return _this;
    }
    Employee.prototype.getAdmissionDate = function () {
        return this.admissionDate;
    };
    Employee.prototype.getBaseSalary = function () {
        return this.baseSalary;
    };
    // Exercício 7
    Employee.prototype.calculateTotalSalary = function () {
        return this.baseSalary + 400;
    };
    return Employee;
}(User_1.User));
var employeeData = new Employee("3", "joao@gmail.com", "João", "password", "28/04/2020", 5000);
// console.log(employeeData.getId())
// console.log(employeeData.getEmail())
// console.log(employeeData.getName())
// console.log(employeeData.getAdmissionDate())
// console.log('O total do salário é R$', employeeData.getBaseSalary())
// Exercício 7
console.log('O total do salário + benefícios é R$' + employeeData.calculateTotalSalary());
