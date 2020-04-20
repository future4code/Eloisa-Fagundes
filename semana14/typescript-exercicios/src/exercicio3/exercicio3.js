// a) Crie um array com 5 objetos deste tipo de posts
var postUm = {
    autor: "Eloisa",
    texto: "Bom dia, luz do dia."
};
var postDois = {
    autor: "Eloisa",
    texto: "Boa tarde."
};
var postTres = {
    autor: "Eloisa",
    texto: "Hora do almoço!"
};
var postQuatro = {
    autor: "Eloisa",
    texto: "Boa noite, pessoal."
};
var postCinco = {
    autor: "Eloisa",
    texto: "Hora de dormir, fui."
};
var timeline = [postUm, postDois, postTres, postQuatro, postCinco];
// b) Crie uma função que receba dois parâmetros: um array de posts e um autor. Ela deve devolver todos os posts deste autor
function meusPosts(array, autor) {
    if (autor) {
        return timeline.filter(function (post) { return post.autor === autor; });
    }
    return timeline;
}
var resultado = meusPosts(timeline);
console.log(timeline);
