import React from 'react';
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import { routes } from '../Router/index';


class ListTripsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    // componentDidMount() {
    //     const token = window.localStorage.getItem("token")
    //     if (token === null) {
    //         this.props.goToLogin();
    //     }
    // }

    render() {
        const { goToCreateTripPage } = this.props;
        return (
            <div>
                <p>Lista de Viagens</p>
                <hr></hr>
                <button
                    onClick={goToCreateTripPage}
                > Criar nova viagem</button>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch) => ({
    goToTripDetails: () => dispatch(push(routes.tripDetails)),
    goToCreateTripPage: () => dispatch(push(routes.tripCreate))
})

export default connect(null, mapDispatchToProps)(ListTripsPage);