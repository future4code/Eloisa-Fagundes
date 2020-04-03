export const getMinDate = () => {
    const today = new Date()
    const stringIsoToday = today.toISOString()
    const splitDateFromTime = stringIsoToday.split("T")
    console.log(splitDateFromTime[0])
    return splitDateFromTime[0]
  }


export const loginForm = [
    {
        name: "tour",
        label: "Passeio",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{5,}",
        title: "Nome do passeio, no mínimo 5 letras."
    },
    {
        name: 'date',
        label: 'Data do evento',
        type: 'date',
        required: true,
        min: getMinDate(),
        title: 'Selecione a data do evento'
      },
    {
        name: "description",
        label: "Descrição da Viagem",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{30,}",
        title: "A descrição deve ter no mínimo 30 caracteres."
    },
    {
        name: "descriptionInDays",
        label: "Duração da viagem (em dias terrestres)",
        type: "number",
        required: true,
        min: 50,
        title: "As viagens devem durar no mínimo 50 dias."
    }
]

export const planets = ["Marte", "Terra", "Vênus"]