import { realizarCompra, Usuario } from "../src/realizarCompra"

describe("testando se o saldo do usuário é maior que o valor", () => {
    test("Deveria retornar se o valor do saldo é maior que o valor ", () => {
        const usuario: Usuario ({
            nome: "Eloisa",
            saldo: 1000
        })

        const resultado = realizarCompra(usuario, 500)

        expect(resultado).toEqual({
            ...usuario,
            saldo:400
        })

    })
})


// describe("", () => {
//     test("", () => {

//     })
// })