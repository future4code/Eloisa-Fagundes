import React from 'react'

const loginForm = [
    {
        name: "tour",
        label: "Passeio",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{5,}",
        title: "Nome do passeio, no mínimo 5 letras."
    },
    {
        name: "planet",
        label: "Planeta",
        type: "select",
        required: true,
        title: "Seleção de planeta requerido."
    },
    {
        name: "date",
        label: "Data da viagem",
        type: "date",
        required: true,
        min: 2020/04/01,
        title: "Data da viagem requerida, não pode ser a data atual ou data passada."
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


class LoginAgencia extends  React.Component {
    constructor(props) {
        super(props)
        this.state = {
           formAgencia: {}
        }
    }


    handleInputChange = (event) => {
        
        const {name, value } = event.target
        this.setState({
            formAgencia: {
                ...this.state.formAgencia,
                [name]: value
            }
        })
    }

    handleSubmission = event => {
        event.preventDefault()
        console.log(this.state.formAgencia)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmission}>
            <div>
                {loginForm.map(field => {
                    <div key={field.name}>
                        <label htmlFor={field.label}>{field.label}: </label>
                        <input
                            type={field.type}
                            value={this.state.form[field.name]}
                            id={field.name}
                        />
                    </div>
                })}
            </div>
            <button type="submit">Criar nova viagem</button>
            </form>
        )
    }





}
export default LoginAgencia
