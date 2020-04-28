// Exercício 6
// a. Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?
// RESPOSTA: Duas vezes. A primeira vez no chamado da classe pai e a segunda vez no construtor da casse filho. 
// b. Imprima as informações dessa instância no terminal. Quais dados são possíveis de serem impressos?
// RESPOSTA: Os dados que vem da classe pai (id, e-mail e name) e os dados dessa classe (admissionDate e baseSalary)

import { User } from './User'

class Employee extends User {
    protected admissionDate: string;
    protected baseSalary: number;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: string,
        baseSalary: number
    ) {
        super(id, email, name, password);
        this.admissionDate = admissionDate
        this.baseSalary = baseSalary
    }

    public getAdmissionDate() {
        return this.admissionDate
    }

    public getBaseSalary() {
        return this.baseSalary
    }

    // Exercício 7
    public calculateTotalSalary():number {
        return this.baseSalary + 400
    }
}


const employeeData = new Employee("3", "joao@gmail.com", "João", "password", "28/04/2020", 5000)

console.log(employeeData.getId())
console.log(employeeData.getEmail())
console.log(employeeData.getName())
console.log(employeeData.getAdmissionDate())
console.log('O total do salário é R$', employeeData.getBaseSalary())

  // Exercício 7
console.log('O total do salário + benefícios é R$', employeeData.calculateTotalSalary())

