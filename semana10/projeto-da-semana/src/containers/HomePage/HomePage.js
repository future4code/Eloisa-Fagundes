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

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            this.props.goToLogin();
        }
    }

    render() {
        return (
            <div>
                <h1>Bem-vindo viajante interestelar!</h1>
                <button>Inscreva-se</button>
                <button>Agência</button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    goToLogin: () => dispatch(push(routes.root))
})

export default connect(null, mapDispatchToProps)(HomePage);