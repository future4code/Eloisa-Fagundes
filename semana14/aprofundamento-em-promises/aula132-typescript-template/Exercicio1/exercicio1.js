"use strict";
//Crie um programa que imprime na tela todos os conteúdos de todos os arquivos de uma pasta, a pasta contém textos mockados, o arquivo textos.
exports.__esModule = true;
var fs_1 = require("fs");
// lê o diretório
fs_1.readdir("../textos", function (err, files) {
    console.log(files);
    files.map(function (file) {
        return fs_1.readFile("../textos/" + file, handleFileRead);
        console.log(file);
    });
});
// lê o arquivo
var handleFileRead = function (err, file) {
    try {
        var fileContent = file.toString();
        console.log(fileContent);
    }
    catch (e) {
        console.log(err);
    }
};
