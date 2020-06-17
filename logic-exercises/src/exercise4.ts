const somenteNumeros: string = "25645465465456"
const numerosEletras: string = "ATD25645465465456akaknATDRADRDASTgg"
const letras: string = "belezinha"
const numerosLetrasEsimbolos: string = "25645465465456akaknATDRADRDASTgg#@$¨%*&&2"

const regex: RegExp = /(\b\d+[0-9]\b)/

console.log(regex.test(somenteNumeros)) // retorna true
console.log(regex.test(numerosEletras)) // retorna false
console.log(regex.test(letras)) // retorna false
console.log(regex.test(numerosLetrasEsimbolos)) // retorna false

