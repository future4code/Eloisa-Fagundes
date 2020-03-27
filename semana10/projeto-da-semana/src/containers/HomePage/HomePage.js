import React from "react";
import { connect } from "react-redux";
import { push } from 'connected-react-router'
import { routes } from '../Router/index'



class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const {goToApplication, goToLogin} = this.props
        return (
            <div>
                <h1>Bem-vindo viajante interestelar!</h1>
                <button
                onClick={goToApplication}
                >Inscreva-se em uma viagem interestelar!</button>
                <button
                onClick={goToLogin}
                >Login para agência</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    goToLogin: () => dispatch(push(routes.login)),
    goToApplication: () => dispatch(push(routes.applyToTrip))
})

export default connect(null, mapDispatchToProps)(HomePage);