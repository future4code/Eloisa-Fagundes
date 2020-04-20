export type carro = {
    marca: string,
    capacidadeDeCombustível: number,
    possuiFlex: boolean,

}

export const gol: carro = {
    marca:"Volkswagen",
    capacidadeDeCombustível: 35,
    possuiFlex: true
}

export const fusca: carro = {
    marca:"Volkswagen",
    capacidadeDeCombustível: 20,
    possuiFlex: false
}

export const estacionamento: carro[] = [gol, fusca]