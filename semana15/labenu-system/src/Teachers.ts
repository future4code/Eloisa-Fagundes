import { User } from "./User";


export class Teatcher implements User {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public especialities: TeacherSpecialty[]
    ){}

    public getId(): number {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    
    public getEspecialities(): TeacherSpecialty[] {
        return this.especialities
    }
}

export enum TeacherSpecialty {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND",
  }