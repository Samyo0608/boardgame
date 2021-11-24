import {React,useState} from 'react'
import PropTypes from 'prop-types'
import {Container, Row,Col,Form} from 'react-bootstrap';

function VoteLabel(props) {
    const {name,vote} = props;
    // const [count,setCount]=useState(vote);

    // console.log("子元素內的值")
    // console.log({name})
    // console.log(count)

    return (
        <>
        <label className="inputFont mb-3">
        <input type="radio" name="vote" className="conInput"
        value={name}
        onClick={
            (e)=>props.setVotename(e.target.value)
        }
    
        />{name}</label> 
        </>
    )
}


export default VoteLabel

