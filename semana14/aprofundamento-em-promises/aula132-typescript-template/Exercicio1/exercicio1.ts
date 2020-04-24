
//Crie um programa que imprime na tela todos os conteúdos de todos os arquivos de uma pasta, a pasta contém textos mockados, o arquivo textos.

import { readFile, readdir } from "fs";

// lê o diretório
readdir("../textos", (err: Error, files: string[]) => {
    console.log(files)

    files.map(file => {
        return readFile("../textos/" + file, handleFileRead)
        console.log(file)
    })
})
// lê o arquivo
        const handleFileRead = (err: Error, file: Buffer) => {

            try {
                const fileContent: string = file.toString()
                console.log(fileContent)

            } catch (e) {
                console.log(err)
            }
        }


    