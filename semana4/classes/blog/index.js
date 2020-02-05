
class Post {
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo

        this.outroPost = () => {
            console.log(titulo, autor, conteudo)
        }
    }
}

let novoPost = new Post ("título novo", "Eloisa velha", "conteudo novo");
console.log(novoPost)


function imprimirPost(event) {
    if (event.type === "click") {
       let titulo =  document.getElementById("titulo").value
        let conteudo =  document.getElementById("conteudo").value
        let autor =  document.getElementById("autor").value
        console.log(titulo, autor, conteudo)
    }
}


// classe { }
// array
// função {
//     array.push(publicação)
// }
