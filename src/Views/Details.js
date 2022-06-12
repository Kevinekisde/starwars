import React, { useEffect, useState } from 'react'
import Navbar from '../Sections/Navbar'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import CharactersModel from '../Components/CharactersModel';
import { Description, InfoContainer, MovieDetails } from '../Styles/DetailsStyles'
import Loading from './Loading';
import Footer from '../Sections/Footer';

const Details = () => {
  const [apiInfo, setApiInfo] = useState({})
  const [characterInfo, setCharacterInfo] = useState([])
  const [starshipsInfo, setStarshipsInfo] = useState([])
  const [planetsInfo, setPlanetsInfo] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios(`https://swapi.dev/api/films/${id}/`)
      setApiInfo(res.data)
    }
    fetchData()
  }, [id])

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios(`https://swapi.dev/api/films/${id}/`)
      setApiInfo(res.data)
    }
    fetchData()
  }, [id])

  useEffect(() => {
    const fetchCharacters = async () => {
      const Promises = await apiInfo?.characters?.map((character) => axios.get(character))
      const ResolvePromises = await axios.all(Promises)
      const Characters = ResolvePromises.map((character) => {
        return {
          name: character.data.name,
        }
      })
      setCharacterInfo(Characters)
    }
    const fetchPlanets = async () => {
      const Promises = await apiInfo?.planets?.map((character) => axios.get(character))
      const ResolvePromises = await axios.all(Promises)
      const planets = ResolvePromises.map((character) => {
        return {
          name: character.data.name,
        }
      })
      setPlanetsInfo(planets)
    }
    const fetchStarships = async () => {
      const Promises = await apiInfo?.starships?.map((character) => axios.get(character))
      const ResolvePromises = await axios.all(Promises)
      const planets = ResolvePromises.map((character) => {
        return {
          name: character.data.name,
        }
      })
      setStarshipsInfo(planets)
    }
    fetchCharacters()
    fetchPlanets()
    fetchStarships()
  }, [apiInfo])



  return (
    <div>
      {
        planetsInfo.length > 0 ?
          <>
            <Navbar></Navbar>
            <InfoContainer>
              <img src={require(`../assets/posters/${apiInfo.episode_id}.jpg`)} />
              <MovieDetails>
                <h1>{apiInfo.title}</h1>
                <p>{`Episode : ${apiInfo.episode_id}`}</p>
                <p>{apiInfo.release_date}</p>
                <Description>
                  <p className="resume">{apiInfo.opening_crawl}</p>
                  <p className="director"><span className="directorSpan">Director</span>{apiInfo.director}</p>
                </Description>
                <CharactersModel
                  title={"Main Characters"}
                  arrayInfo={characterInfo}
                />
                <CharactersModel
                  title={"Planets"}
                  arrayInfo={planetsInfo}
                />
                <CharactersModel
                  title={"Starships"}
                  arrayInfo={starshipsInfo}
                />
                <Link to={`/home/graphics/${id}`}>
                  <button>Click Here For More info</button>
                </Link>
              </MovieDetails>
            </InfoContainer>
            <Footer/>
          </>
          :
          <Loading></Loading>

      }

    </div>
  )
}

export default Details