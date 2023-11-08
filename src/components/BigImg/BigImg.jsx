import { Container } from "react-bootstrap"
import chef from "../../assets/chef.png"
import "./BigImg.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
const BigImg = () => {
    return (
        <Container className="bigImg mt-5 mb-5">
            <img src={chef} alt="chef" />

            <div className="text">
                <h4>Want to be a part of Foodtime?</h4>
                <p className="text-white-50">List your restaurant or shop on foodtime.</p>
                <button className="rounded-pill">
                    Get Started 
                    <FontAwesomeIcon icon={faArrowRight}  />
                </button>
            </div>
        </Container>
    )
}

export default BigImg
