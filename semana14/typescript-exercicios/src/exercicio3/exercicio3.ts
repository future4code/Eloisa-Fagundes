// Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.

type post = {
    autor: string,
    texto: string
}

// a) Crie um array com 5 objetos deste tipo de posts

const postUm: post = {
    autor: "Eloisa",
    texto: "Bom dia, luz do dia."
}

const postDois: post = {
    autor: "Eloisa",
    texto: "Boa tarde."
}

const postTres: post = {
    autor: "Eloisa",
    texto: "Hora do almoço!"
}

const postQuatro: post = {
    autor: "Eloisa",
    texto: "Boa noite, pessoal."
}

const postCinco: post = {
    autor: "Eloisa",
    texto: "Hora de dormir, fui."
}

const minhaTimeline: post[] = [postUm, postDois, postTres, postQuatro, postCinco]


// b) Crie uma função que receba dois parâmetros: um array de posts e um autor. Ela deve devolver todos os posts deste autor

function meusPosts(array: post[], autor?: string): post[] {
    if (autor) {
        return minhaTimeline.filter(post => post.autor === autor)
    }
    return minhaTimeline
}
const resultado = meusPosts(minhaTimeline)
console.log(minhaTimeline)
