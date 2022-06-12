import React from 'react'
import { Card } from '../Styles/CardsStyles'

const Cards = ({EpisodeId}) => {

    return (
        <Card>
            <img src={require(`../assets/posters/${EpisodeId}.jpg`)} alt="" />
        </Card>
    )
}

export default Cards