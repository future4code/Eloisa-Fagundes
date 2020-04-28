
export class Transaction {
    cpf: string;
    value: number;
    description: string

    constructor(_cpf: string, _value: number, _description: string, ) {
        this.cpf = _cpf
        this.value = _value
        this.description = _description
    }
}