

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    public introduceYourself: string

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }


    // Exercício 4 
    //       public getIntroduceYourself(): string {
    //           return "Olá, bom dia!"
    //       }
    //   }


    // Exercício 5
    public getIntroduceYourself(): string {
        return ("Olá, sou " + `${this.getName()}` + ". Bom dia!")
    }
}


