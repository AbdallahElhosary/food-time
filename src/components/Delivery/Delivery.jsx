import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'
import frame1 from "../../assets/Frame1.icon"
import frame2 from "../../assets/Frame2.icon"

import "./Delivery.scss"

const Delivery = () => {
    return (
        <div className='delivery'>
            <Container>
                <Row className='pt-5 pb-5 mb-5'>
                    <Col lg={4} md={6} sm={12} className='box'>
                        <FontAwesomeIcon icon={faUtensils} className='main-color' />
                        <h4>Wide selection of <br />  restaurants </h4>
                        <p className='light-color'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique.</p>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='box'>
                        <img src={frame1} alt="frame1" />
                        <h4>Easy ordering <br />  process </h4>
                        <p className='light-color'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique.</p>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='box'>
                        <img src={frame2} alt="frame2" />
                        <h4>Fast delivery within  <br /> 20 min </h4>
                        <p className='light-color'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Delivery
