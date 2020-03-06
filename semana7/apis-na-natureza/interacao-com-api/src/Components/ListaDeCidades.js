import React from 'react'
import axios from 'axios'

const baseUrl = "https://www.metaweather.com//api/location/(woeid)/(date)/"

class ListaDeCidades extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            woeid: [],
            date: []

        }
    }
placesList = [/* Nairobi*/ 1528488, /* Mombassa*/ 1528335, /* Addis Ababa*/ 1313090, /*Cape Town*/ 1591691, /* Windhoek*/ 1466719]
 
    render() {
        return (
            <div>
                <select>
        <option>{this.placesList}</option>
                </select>
            </div>
        )
    }
}


export default ListaDeCidades