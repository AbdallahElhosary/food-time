import React from 'react'
import "./Frequently.scss"
import { Col, Container, Row } from 'react-bootstrap'
const Frequently = () => {
  return (
    <div className='frequently pt-5 pb-5'>
      <Container>
        <h2 className='text-center'>Frequently asked questions</h2>
        <div className='types text-center mt-3'>
          <button className='rounded-pill'>General</button>
          <button className='rounded-pill'>For Business</button>
        </div>
        <div className="container px-4">
          <div className="row gx-5 mt-4">
            <Col md={12} lg={6}>
              <div className='drop close'>
                <span>What de I need to apply for the account?</span>
                <div className='add'>+</div>
              </div>
              <div className='drop open flex-column'>
                <div className='d-flex justify-content-between w-100 mb-3'>
                  <span>What de I need to apply for the account?</span>
                  <div className='add'>-</div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.
Dui et est dignissim amet dis nulla vulputate. Id aenean senectus fames lobortis dolor turpis eget lacinia et.</p>
              </div>
              <div className='drop close'>
                <span>What de I need to apply for the account?</span>
                <div className='add'>+</div>
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className='drop close'>
                <span>What de I need to apply for the account?</span>
                <div className='add'>+</div>
              </div>
              <div className='drop close'>
                <span>Is foodtime available 24 hours?</span>
                <div className='add'>+</div>
              </div>
              <div className='drop close'>
                <span>Is there any hidden fee included?</span>
                <div className='add'>+</div>
              </div>
              <div className='drop close'>
                <span>What de I need to apply for the account?</span>
                <div className='add'>+</div>
              </div>
            </Col>
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Frequently 
