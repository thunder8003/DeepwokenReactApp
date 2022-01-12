import React from "react"
import { Container } from "react-bootstrap"
import '../css/Weapons.css';

function AboutMe() {
    return (
        <React.Fragment>
            <img src="/images/Background.png" className="background" />
            <Container fluid>
                <h1 style={{margin: '0 auto', width: 'fit-content', paddingTop: '10%', fontFamily: 'sans-serif', color: 'white'}}>
                    Coming Soon!
                </h1>
            </Container>
        </React.Fragment>
    )
}

export default AboutMe