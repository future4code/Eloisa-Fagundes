// a)
const minhaString: string =  "Escola"

console.log("O tamanho da minha string é:", minhaString.length) // deve retornar 6
console.log("O primeiro caractere é: ", minhaString.charAt(0)) // deve retornar E
console.log("O último caractere é: ", minhaString.slice(-1)) //deve retornar a 

// b)

// resolução 1
const resultado = minhaString.split("")
console.log("meu array de caracteres é ", resultado)

// resolução 2
const frase: string =  "Vitrola, Bengala e Margarete"
const arrayDeCaracteres = []
for(const letra of frase) {
    arrayDeCaracteres.push(letra)
}
console.log("meu segundo array de caracteres é ", arrayDeCaracteres)
