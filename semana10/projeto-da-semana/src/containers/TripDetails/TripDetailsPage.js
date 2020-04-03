import React from 'react';


class TripDetails extends React.Component {
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
        return (
            <div>
                <h1>Detalhes da viagem</h1>
            </div>
        )
    };
}

export default TripDetails;