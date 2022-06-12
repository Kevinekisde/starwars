import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import StarWars from '../assets/Star_Wars_Logo.svg.png'
import { Container } from '../Styles/NavbarStyles'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate(-1)

  }
  return (
    <Container>
        <button onClick={handleBackButton}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>volver</button>
        <img src={StarWars}></img>
        <>div</>
    </Container>
  )
}

export default Navbar