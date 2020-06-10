const wordOne: string = "Escola"
const wordTwo: string = "escola"
const wordThree: string = "EsCoLa"

// a)
if (wordOne === wordTwo) {
    console.log(true)
} else {
    console.log(false)
}
// retona false

// b)
if (wordOne.toLowerCase() === wordTwo.toLowerCase() || 
    wordTwo.toLowerCase() === wordThree.toLowerCase() ||
    wordOne.toLowerCase() === wordThree.toLowerCase()) {
    console.log(true)
} 
 else {
    console.log(false)
}
// retorna true