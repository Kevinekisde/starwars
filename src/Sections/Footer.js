import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Bar, ContactInfo, Container, ContainerInfo, Info, PersonalInfo, } from '../Styles/FooterStyles'

const Footer = () => {
  return (
    <Container>
        <ContainerInfo>
            <PersonalInfo>
                <Info>
                    <h1>Kevin Ignacio Leiva Puga</h1>
                    <p>Prueba Tecnica CCU</p>
                </Info>
            </PersonalInfo>
            <Bar></Bar>
            <ContactInfo>
                <a href="https://github.com/Kevinekisde"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://www.linkedin.com/in/kevin-leiva-98208a184/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </ContactInfo>
        </ContainerInfo>
    </Container>
  )
}

export default Footer