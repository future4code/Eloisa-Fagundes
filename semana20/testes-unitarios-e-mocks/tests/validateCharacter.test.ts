import { validateCharacter } from "../src/validateCharacter"

describe("testing validateCharacter", () => {
    //    A.
    test("Should return false when input.name is empty.", () => {
        const input = {
            name: "",
            life: 10,
            strenght: 10,
            defense: 10
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)
    })

    //    B.
    test("Should return false when input.life is empty.", () => {
        const input = {
            name: "Eloisa",
            life: undefined,
            strenght: 10,
            defense: 10
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)
    })

    //    C.
    test("Should return false when input.strenght is empty.", () => {
        const input = {
            name: "Eloisa",
            life: 10,
            strenght: undefined,
            defense: 10
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)
    })

    //    D.
    test("Should return false when input.defense is empty.", () => {
        const input = {
            name: "Eloisa",
            life: 10,
            strenght: 10,
            defense: undefined
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)

    })

    //    E.
    test("Should return false when input.life, input.defense or input.strenght is negative.", () => {
        const inputOne = {
            name: "Eloisa",
            life: -10,
            strenght: 10,
            defense: 10
        }
        const inputTwo = {
            name: "Eloisa",
            life: 10,
            strenght: -10,
            defense: 10
        }
        const inputThree = {
            name: "Eloisa",
            life: 10,
            strenght: 10,
            defense: -10
        }

        const outputOne = validateCharacter(inputOne)
        const outputTwo = validateCharacter(inputTwo)
        const outputThree = validateCharacter(inputThree)

        expect(outputOne).toBe(false)
        expect(outputTwo).toBe(false)
        expect(outputThree).toBe(false)
    })

    //    F.
    test("Should return true when input.life, input.defense or input.strenght is equal 0.", () => {
        const inputOne = {
            name: "Eloisa",
            life: 0,
            strenght: 10,
            defense: 10
        }
        const inputTwo = {
            name: "Eloisa",
            life: 10,
            strenght: 0,
            defense: 10
        }
        const inputThree = {
            name: "Eloisa",
            life: 10,
            strenght: 10,
            defense: 0
        }

        const outputOne = validateCharacter(inputOne)
        const outputTwo = validateCharacter(inputTwo)
        const outputThree = validateCharacter(inputThree)

        expect(outputOne).toBe(true)
        expect(outputTwo).toBe(true)
        expect(outputThree).toBe(true)

    })

    //    G.
    test("Should return true when input.name, input.life, input.defense and input.strenght is valid.", () => {
        const input = {
            name: "Eloisa",
            life: 10,
            strenght: 10,
            defense: 10
        }

        const output = validateCharacter(input)

        expect(output).toBe(true)
    })
}) 
