import React from 'react'
import Jedi from '../assets/jedi.png'
import sith from '../assets/sith.png'
import { useNavigate } from 'react-router-dom'
import { Container,CardJedi,CardSith,Factions, Titles } from '../Styles/LandingPageStyle'

const LandingPage = ({setThemeSelector}) => {

  const navigate = useNavigate()

  const jediFactions = () => {
    setThemeSelector('light')
    navigate('/home')
  }
  const sithFactions = () => {
    setThemeSelector('dark')
    navigate('/home')
  }


  return (
    <Container>
      <Titles>
      <h1>Welcome Padawan</h1>
      <p>Choose your Faction</p>
      </Titles>
      <Factions>
        <CardJedi>
          <h1>Jedi</h1>
          <img width="100" src={Jedi}></img>
          <button onClick={jediFactions}>
            Choose Jedi
          </button>
        </CardJedi>
        <CardSith>
          <h1>Sith</h1>
          <img width="90" src={sith}></img>
          <button onClick={sithFactions}>
          Choose Sith
          </button>
        </CardSith>
      </Factions>

    </Container>
  )
}

export default LandingPage