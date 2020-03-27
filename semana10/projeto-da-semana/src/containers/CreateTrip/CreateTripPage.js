import React from 'react'
import { loginForm } from './variables'
import { connect } from 'react-redux'
import { planets } from './variables'



class CreateTripPage extends  React.Component {
    constructor(props) {
        super(props)
        this.state = {
           form: {}
        }
    }

     // componentDidMount() {
    //     const token = window.localStorage.getItem("token")
    //     if (token === null) {
    //         this.props.goToLogin();
    //     }
    // }
    
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
      
        const loginFormSelect = [
            {
                name: "planet",
                label: "Planeta",
                type: "select",
                required: true,
                title: "Seleção de planeta requerido.",
                value: planets
            }
        ]

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

                {loginFormSelect.map(selected => (
                    <div key={selected.name}>
                        <label htmlFor={selected.label}>{selected.label}:</label>

                        <select 
                        type={selected.type}
                        value={this.state.form[selected.listPlanets]}
                        id={selected.name}>
                            <option>---------</option> */}
                        {selected.value.map(planets => ( 
                            <option>{planets}</option> 
                         ))}
                        </select>

                    </div>
                ))}
            </div>
            <button type="submit">Criar nova viagem</button>
         
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(CreateTripPage)
