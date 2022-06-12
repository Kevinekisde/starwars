import React, { useEffect, useState } from 'react'
import Navbar from '../Sections/Navbar'
import { useParams } from 'react-router-dom'
import { Bar, Chart } from 'react-chartjs-2'
import { Chart as ChartJS, } from 'chart.js/auto'
import axios from 'axios'
import { ChartContainer, Container, InfoContainer } from '../Styles/GraphicsMovie'
import Loading from './Loading'

const GraphicsMovie = () => {
    const { id } = useParams()
    const [apiInfo, setApiInfo] = useState({})
    const [charactersDataForChart, setCharactersDataForChart] = useState([])
    const [starshipsInfo, setStarshipsInfo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios(`https://swapi.dev/api/films/${id}/`)
            setApiInfo(res.data)
        }
        fetchData()
    }, [id])

    useEffect(() => {
        const fetchCharacters = async () => {
            const dataForChart = []
            const dataObject = {}
            const Promises = apiInfo?.characters?.map((character) => axios.get(character))
            const ResolvePromises = await axios.all(Promises)
            const Characters = ResolvePromises.map((character) => {
                return {
                    name: character.data.name,
                    hairColor: character.data.hair_color
                }
            })
            Characters.forEach((character) => {
                dataForChart.push(character.hairColor)
            })
            dataForChart.forEach((data) => {
                dataObject[data] = !dataObject[data] ? 1 : dataObject[data] += 1
            })
            setCharactersDataForChart(dataObject)
        }
        const fetchStarships = async () => {
            const dataForChart = []
            const dataObject = {}
            console.log(apiInfo)
            const Promises = await apiInfo?.starships?.map((character) => axios.get(character))
            const ResolvePromises = await axios.all(Promises)
            const Starships = ResolvePromises.map((character) => {
                return {
                    name: character.data.name,
                    cost: character.data.cost_in_credits,
                    passengers: character.data.passengers,
                }
            })
            Starships.forEach((Starship) => {
                dataForChart.push(Starship.passengers)
            })

            dataForChart.forEach((data) => {
                dataObject[data] = !dataObject[data] ? 1 : dataObject[data] += 1
            })
            setStarshipsInfo(dataObject)
        }
        fetchCharacters()
        fetchStarships()
    }, [apiInfo])


    const dataCharactersChart = {
        labels: Object.keys(charactersDataForChart),
        datasets: [{
            label: 'Characters',
            backgroundColor: '#d8c514',
            borderColor: 'black',
            borderWidth: 2,
            data: Object.values(charactersDataForChart)
        }]
    }
    const dataStarshipsChart = {
        labels: Object.keys(starshipsInfo),
        datasets: [{
            label: 'Starships',
            backgroundColor: '#d8c514',
            borderColor: 'black',
            borderWidth: 1,
            data: Object.values(starshipsInfo)
        }]
    }
    const options = {
        maintainAspectRatio: true,
        title: {
            display: true,
            text: 'Hola',
        },
    }


    return (

        <>
        <Navbar></Navbar>
        <Container>
            <InfoContainer>
                <h1>Hair Color of Characters</h1>
                <Bar data={dataCharactersChart} options={options}></Bar>
            </InfoContainer>
            <InfoContainer>
                <h1>quantity of passenger in starship</h1>
                <Bar data={dataStarshipsChart} options={options}></Bar>
            </InfoContainer>

        </Container>
        </>


    )
}

export default GraphicsMovie