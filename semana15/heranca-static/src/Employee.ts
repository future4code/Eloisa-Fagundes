
import { User } from './User'

export class Employee extends User {
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


