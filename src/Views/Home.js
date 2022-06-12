import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Cards from '../Components/Cards'
import Footer from '../Sections/Footer';
import Navbar from '../Sections/Navbar'
import s from '../Styles/Home.module.css'
import { CardsContainer, Container, Movies } from '../Styles/HomeStyles';
import Loading from './Loading';
import "animate.css";


export const Home = () => {
  const [apiInfo, setApiInfo] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let res = await axios("https://swapi.dev/api/films/")
      setApiInfo(res.data.results)
    }
    setTimeout(() =>
    fetchData(),1500)
  }, [])



  return (
    <div className={s.Container}>
      {
        apiInfo?.length > 0 ?
          <Container>
            <Navbar />
            <div class="animate__animated animate__backInUp">

              <Movies>
                <h1>Films</h1>
                <CardsContainer>
                  {
                    apiInfo.map((Movie, i) => {
                      return (
                        <Link to={`/home/${i + 1}`}>
                          <Cards
                            Title={Movie.title}
                            EpisodeId={Movie.episode_id}
                          />
                        </Link>
                      )
                    })
                  }
                </CardsContainer>
              </Movies>
            </div>
            <Footer></Footer>
          </Container>
          :
          <Loading></Loading>
      }
    </div>
  )
}
