import React from 'react'
import PropTypes from 'prop-types'
import "../../css/vote.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row,Col,} from 'react-bootstrap'

function vote(props) {
    return (
        <>
             {/* 投票活動 */}
        <h2 className="text-center">投票活動</h2>
        <div className="titleLineBox">
            <img alt="" className="titleLine" src="img/index/line.png" />
        </div>

        </>
    )
}



export default vote


