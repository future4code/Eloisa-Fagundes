// criar o array de trips e fazer a integração com API

const initialState = {
    allTrips: [
        {
            "id": "0aQ9retlt9zxpeo40G2M",
            "name": "Multi luau em Jupiter",
            "description": "Noite mágica, com vista para as 69 luas de Jupiter",
            "planet": "Jupiter",
            "durationInDays": 540,
            "date": "21/12/20"
        },
        {
            "id": "HF3V6C2VFWoQ3QUOVJON",
            "name": "Picnic de Inverno em Plutão",
            "description": "Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C",
            "planet": "Plutão",
            "durationInDays": 980,
            "date": "21/12/20"
        }
    ]
}

const trips = (state= initialState, action) => {
    switch(action.type){
        // colocar os cases aqui
        default: return state
    }
}

export default trips