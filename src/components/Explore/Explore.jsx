import React from 'react'
import "./Explore.scss"
import { Col, Container, Row } from 'react-bootstrap'
import bike from "../../assets/bike.png"
import buliding from "../../assets/building.png"

const Explore = () => {
    return (
        <div className='explore second-bg'>
            <Container>
                <Row className='pt-5 pb-5'>
                    <Col md={12} lg={7} >
                        <div className='title main-color'>Explore your <br />
                            favourite city’s food.</div>
                        <p>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>
                        <button className='main-btn'>
                            Explore
                        </button>
                    </Col>
                    <Col md={12} lg={5} className='right' >
                        <img src={bike} alt="bike" />
                        <img src={buliding} alt="buliding" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Explore
