import React from 'react'
import { connect } from "react-redux";
import { push } from 'connected-react-router'
import { routes } from '../Router/index'
import { country, loginForm } from './variables'

class ApplyToTrip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {},
        }
    }

    handleInputChange = (event) => {

        const { name, value } = event.target
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
        const { goToHome, listTrips } = this.props
        console.log(listTrips)

        const trips = this.props.listTrips
       

        const tripsSelect = {
            name: "tripSelected",
            label: "Escolha sua viagem ...",
            type: "select",
            required: true,
            title: "Você deve escolher uma viagem para se candidatar.",
            value: trips
        }

        const countrySelect = {
            name: "country",
            label: "País",
            type: "select",
            required: true,
            title: "Você deve escolher o país em que reside.",
            value: country
        }
        
        return (
            <div>
                <form onSubmit={this.handleSubmission}>
                    <div>
                        {loginForm.map(field => (
                            <div key={field.name}>
                                <label htmlFor={field.label}>{field.label}:</label>
                                <input
                                    type={field.type}
                                    value={this.state.form[field.name]}
                                    id={field.name}
                                />
                            </div>
                        ))}

                      {/* viagens  */}
                            <div key={tripsSelect.name}>
                                <label htmlFor={tripsSelect.label}>{tripsSelect.label}:</label>

                                <select
                                    type={tripsSelect.type}
                                    value={this.state.form[tripsSelect.country]}
                                    id={tripsSelect.name}>
                                         <option>------</option>
                                         
                                          {tripsSelect.value.map(value => (
                                            <option>{value.name} - {value.planet}</option>
                                          ))}
                                </select>
                            </div>
                    {/* países */}
                            <div key={countrySelect.name}>
                                <label htmlFor={countrySelect.label}>{countrySelect.label}:</label>

                                <select
                                    type={countrySelect.type}
                                    value={this.state.form[countrySelect.country]}
                                    id={countrySelect.name}>
                                         <option>------</option>
                                         
                                          {countrySelect.value.map(value => (
                                            <option>{value}</option>
                                          ))}
                                </select>
                            </div>
                       
                    </div>
                    <button type="submit">Criar nova viagem</button>
                    <hr></hr>
                    <div>
                        <span onClick={goToHome}>Voltar para Home</span>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listTrips: state.trips.allTrips
})

const mapDispatchToProps = (dispatch) => ({
    goToHome: () => dispatch(push(routes.root)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplyToTrip)

