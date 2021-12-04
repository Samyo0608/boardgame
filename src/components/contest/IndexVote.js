import React from 'react'
import PropTypes from 'prop-types'
import {LABELIMGS} from "../../configs/config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import BarChartIndex from "./BarChartIndex"
import {Row, Col,Carousel} from "react-bootstrap";
function IndexVote(props) {
  const {vote,name,rankArr1,rankArr2,rankArr3}=props;
  // console.log(Rank)
    return (
        <>
               <div className="clanderContentBox">
          <Row className="row">
            <Col md={6} className="col ms-5 mt-5">
              <Carousel variant="dark" >
                <Carousel.Item>
                   <img
                    className="d-block w-100 slideVote"
                    src={rankArr1}
                    alt="First slide" 
                  />
                    <Carousel.Caption>
                </Carousel.Caption>
                </Carousel.Item>
              <Carousel.Item>
                   <img
                    className="d-block w-100 slideVote"
                    src={rankArr2}
                    alt="Second slide"
                  />
                  <Carousel.Caption>
              </Carousel.Caption>
              </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 slideVote"
                src={rankArr3}
                alt="Third slide"
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            </Col>
            <Col md={5} className="col text-center fw-bold mt-5">
            <BarChartIndex 
              name={name}
              vote={vote}
            />
            </Col>
          </Row>
          <div className="voteLine"></div>
        </div> 
        </>
    )
}

export default IndexVote

