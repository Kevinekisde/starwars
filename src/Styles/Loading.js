import styled from 'styled-components'
import LogoStar from '../assets/starwarslogo.png'


export const Container = styled.div`
width:100%;
min-height:100vh;
background-color: ${({theme}) => theme.background};

`

export const Intro = styled.div`
  opacity: 0;
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);  
  text-align: center;
  color: rgb(75, 213, 238);
  font-size: 200%;
  animation: intro 1000s ease-out infinite;

  @keyframes intro {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 0;
    }  
    1.5% { 
      opacity: 1; 
    }
    5.5% { 
      opacity: 1; 
    }
    6% { 
      opacity: 0;
    } 
  }

  @media (max-width: 480px){
    font-size: 150%;
  }

`