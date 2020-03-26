import React from 'react'

const loginForm = [
    {
        name: "name",
        label: "Nome",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{3,}",
        title: "Nome completo do usuário, no mínimo 3 letras."
    },
    {
        name: "age",
        label: "Idade",
        type: "number",
        required: true,
        min: 18,
        title: "O viajante deve ter no mínimo 18 anos completos."
    },
    {
        name: "applicationText",
        label: "Porque sou um bom candidato?",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{30,}",
        title: "A descrição deve ter no mínimo 30 caracteres."
    },
    {
        name: "profession",
        label: "Porque sou um bom candidato?",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{10,}",
        title: "A profissão deve ter no mínimo 10 caracteres."
    },
    {
        name: "country",
        label: "País",
        type: "selected",
        required: true,
        title: "Você deve escolher o país em que reside."
    },
    {
        name: "tripId",
        label: "Id da viagem",
        type: "text",
        required: true,
        pattern: "[a-zA-Z]{10,}",
        title: "A profissão deve ter no mínimo 10 caracteres."
    },
]


class ApplyToTrip extends  React.Component {
    constructor(props) {
        super(props)
        this.state = {
           form: {}
        }
    }


    handleInputChange = (event) => {
        
        const {name, value } = event.target
        this.setState({
            form: {
                ...this.state.form,
                [name]: value
            }
        })
    }

    handleSubmission = event => {
        event.preventDefault()
        console.log(this.state.form)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmission}>
            <div>
            {loginForm.map(field => (
                    <div key={field.name}>
                        <label htmlFor={field.label}>{field.label}: </label>
                        <input
                            type={field.type}
                            value={this.state.form[field.name]}
                            id={field.name}
                        />
                    </div>
                ))}
            </div>
            <button type="submit">Criar nova viagem</button>
            </form>
        )
    }

}
export default ApplyToTrip
