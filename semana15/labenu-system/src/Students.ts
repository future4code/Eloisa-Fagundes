import { User } from "./User"

export class Student implements User {

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDay: string,
        public hobbies: string[]
    ) { }

    public getId(): number {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getBirthDay(): string {
        return (this.birthDay)
    }

    public getHobbies(): string[] {
        return this.hobbies
    }

}

