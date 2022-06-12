import React from 'react'
import { CharacterName, Container } from '../Styles/CharacterCard'

export const CharacterCard = ({name}) => {
    return (
        <Container>
            <CharacterName>
                <h1 className="CharacterNametext">{name}</h1>
            </CharacterName>
        </Container>
    )
}
