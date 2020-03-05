import React from 'react'
import axios from'axios'

baseUrl = "https://www.metaweather.com//api/location/(woeid)/(date)/"

class ListaDeCidades extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            woeid: "",
            date:""

        }
    }

    render(){
        return(
            <div>
                <select>
                    <option></option>
                </select>
            </div>
        )
    }
}


export default ListaDeCidades