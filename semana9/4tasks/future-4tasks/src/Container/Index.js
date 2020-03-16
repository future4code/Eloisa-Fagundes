import React from 'react'
import { connect } from "react-redux"

const Index = props => {
    return (
        <div>
            <input> Hello? can you hear me?
            </input>
        </div>
    )
}

export default connect()(Index)