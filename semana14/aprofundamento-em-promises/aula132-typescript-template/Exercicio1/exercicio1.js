"use strict";
//Crie um programa que imprime na tela todos os conteúdos de todos os arquivos de uma pasta, a pasta contém textos mockados, o arquivo textos.
exports.__esModule = true;
var fs_1 = require("fs");
// lê o diretório
fs_1.readdir("../textos", function (err, files) {
    console.log(files);
});
// myPromise = new Promise((resolve,reject) => {
// const handleFileRead = (err:Error, data:Buffer) => {
//     try {
//     } catch(e) {
//         reject(err)
//     }
// }
