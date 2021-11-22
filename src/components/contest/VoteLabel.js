import React from 'react'
import PropTypes from 'prop-types'
import {Container, Row,Col,Form} from 'react-bootstrap';

function VoteLabel(props) {
    const {name,vote} = props

    return (
        <>
        <label className="inputFont mb-3"><input type="radio" name="vote" className="conInput"
        onClick={(e) =>{
            // console.log({name})
            // console.log({vote})
        }
        }
        />{name}</label> 
        </>
    )
}


export default VoteLabel

