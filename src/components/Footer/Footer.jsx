import { Col, Container, Row } from "react-bootstrap"
import "./Footer.scss"
import vector from "../../assets/Vector1.png";
const Footer = () => {
    return (
        <footer className="first-bg pt-5 pb-5">
            <Container>
                <Row>
                    <Col className="left" lg={6} md={12}>
                        <div className="head"> 
                            <h1>FoodTime
                            <img src={vector} alt="Vector" />
                            </h1>
                        </div>

                        <p className="light-color">Lorem ipsum dolor sit amet consectetur. Odio amet natoque tortor convallis. Bibendum sapien suspendisse ipsum urna malesuada elit. Bibendum vitae nibh scelerisque sed aliquam ullamcorper est.</p>
                    </Col>
                    <Col className="right d-flex justify-content-between" lg={6} md={12}>
                        <div className="links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    Browse Foodtime
                                </li>
                                <li>
                                    Browse Foodtime
                                </li>
                                <li>
                                    Registrations
                                </li>
                            </ul>
                        </div>
                        <div className="links">
                            <h4>About</h4>
                            <ul>
                                <li>
                                    About us`
                                </li>
                                <li>
                                    Minssion
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>
                        </div>
                        <div className="links">
                            <h4>Social</h4>
                            <ul>
                                <li>
                                    LinkedIn
                                </li>
                                <li>
                                   FaceBook
                                </li>
                                <li>
                                    Twitter
                                </li>
                            </ul>
                        </div>

                    </Col>
                </Row>
                <center>© 2023 Prepared by <a href="" target="_blank">Abdullah Elhosary</a></center>
            </Container>
        </footer>
    )
}

export default Footer
