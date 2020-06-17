export const handler = async (event: any) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify("Olá mundo, sou uma mensagem da AWS")
    }

    return response
}

// exports.handler = async (event) => {
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify("Olá mundo, sou uma mensagem da AWS")
//     }
    
//     return response
// }