import React from 'react'
import "./Pockets.scss"
import { Col, Container, Row } from 'react-bootstrap'
import appleLogo from "../../assets/Applelogo.png"
import mocup from "../../assets/mockup.png"

const Pockets = () => {
    return (
        <div className='pockets second-bg'>
            <Container>
                <Row className="pt-5 pb-5">
                    <Col className='left mb-4' md={12} lg={6} >
                        <div className='title main-color'>Put us in your<br /> pocket</div>
                        <p className='light-color'>Download our app from google play or app store and you don’t have to be worry about your food anymore.</p>
                        <div className='devices'>
                            <div className='box'>
                                <img src={appleLogo} alt="apple-logo" />
                                <span>Download on the
                                    <h6>App Store</h6></span>
                            </div>
                            <div className='box'>
                                <img src={appleLogo} alt="apple-logo" />
                                <span>Download on the
                                    <h6>Google Play</h6></span>
                            </div>
                        </div>
                    </Col>
                    <Col  md={12} lg={6} className="right mb-4">
                        <img src={mocup} alt="mocup" />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Pockets
