import React from 'react'
import "./Home.scss"
import tree from "../../assets/tree.png";
import vector from "../../assets/Vector.png"
import rate from "../../assets/200k+.png"
import dich from "../../assets/dich.png"
// import {BiCurrentLocation} from "react-icons/bi"
import { Button, Col, Container, Row } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='home main-bg'>
      <div className='overlay'></div>
      <div className='images'>
        <img src={tree} alt="tree" className='left-tree' />
        <img src={tree} alt="tree" className='right-tree'/>
      </div>
      <Container>
        <Row>
          <Col className='right my-5' md={12} lg={5}>
            <div className='deliverd'>
              <div>
                <img src={vector} alt="vector" />
                <img src={rate} alt="rate" />
              </div>
              <p>People Delivered</p>

            </div>
            <img src={dich} alt="dich" className='dich' />
          </Col>
          <Col className='left  my-5' md={12} lg={7}>
            <div className='title main-color'>Order food online from your favourite local restaurants.</div>
            <p>Freshly made food delivered to your door.</p>

            <div className='form'>
              <input type='search '  placeholder='Enter Your Location'/>
              {/* <BiCurrentLocation /> */}
              <button className='main-btn'>
                Search
              </button>
            </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default Home
