
//Crie um programa que imprime na tela todos os conteúdos de todos os arquivos de uma pasta, a pasta contém textos mockados, o arquivo textos.

import { readFile, readdir } from "fs";

// lê o diretório
readdir("../textos", (err: Error, files: string[]) => {
    console.log(files)

// lê o arquivo
const myPromise = new Promise((resolve, reject) => {

    const handleFileRead = (err: Error, file: Buffer) => {
       
        files.map(file => {
            
        })

        try {
            const fileContent: string = file.toString()
            resolve(fileContent)

        } catch (e) {
            reject(err)
        }
    }

    readFile("../texto", handleFileRead)
})

myPromise
    .then((result: string) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
})