import React from 'react'
import PropTypes from 'prop-types'

function VoteLabel(props) {
    const {name} = props
    return (
        <>
        <label className="inputFont mb-3"><input type="radio" name="vote" className="conInput"/>{name}</label> 
        </>
    )
}


export default VoteLabel

