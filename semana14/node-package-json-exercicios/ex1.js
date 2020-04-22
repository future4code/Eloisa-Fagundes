const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if (operation === "add") {
    console.log("A RESPOSTA É: ", num1 + num2)
} else if (operation === "sub") {
    console.log("A RESPOSTA É: ", num1 - num2)
} else if (operation === "mult") {
    console.log("A RESPOSTA É: ", num1 * num2)
} else if (operation === "div") {
    console.log("A RESPOSTA É: ", num1 / num2)
} else {
    console.log("Não foi possível executar. Verifique se a operação e os números correspondem ao exigido.")
}

