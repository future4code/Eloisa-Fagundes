export interface Character {
    name: string,
    life: number,
    strenght: number,
    defense: number
}


export const validateCharacter = (input: Character): boolean => {
    if (input.name === "" ||
        input.life === undefined ||
        input.strenght === undefined ||
        input.defense === undefined) {
        return false
    }

    if (input.life < 0 ||
        input.strenght < 0 ||
        input.defense < 0) {
        return false
    }

    return true
}