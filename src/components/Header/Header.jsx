import React, { useState } from "react";
import "./Header.scss";
import {
    Button,
    Container,
    Dropdown,
} from "react-bootstrap";

const Header = () => {
    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        setClicked(!clicked)
    }

    console.log(clicked);
    return (
        <header className="main-bg">
            <Container>
                <div className="logo main-color">Foodtime</div>
                <div className={`right`}>
                    <span className={`icon ${clicked && "clicked-icon"}`} onClick={handleClicked}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <ul className={`links ${clicked && "clicked-links"}`}>
                        <li className="link">
                            <a href="#">Home</a>
                        </li>
                        <li className="link">
                            <a href="#">Blog</a>
                        </li>
                        <li className="link">
                            <a href="#">About Us</a>
                        </li>
                        <Dropdown
                            key="down"
                            id={`dropdown-button-drop-down`}
                            drop="down"
                            variant="secondary"
                            title={` Drop down `}>
                            <Dropdown.Toggle
                                variant="success"
                                className="rounded-pill"
                                id="dropdown-basic"
                            >
                                EN
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">EN</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">AR</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="success" className="rounded-pill">
                            Login
                        </Button>
                    </ul>
                </div>
            </Container>
        </header>
    );
};

export default Header;
