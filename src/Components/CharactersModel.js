import React, { useState } from 'react'
import { Container, Heading,NameContainer } from '../Styles/CharactersModelStyle'
import { CharacterCard } from './CharacterCard'

const CharactersModel = ({ arrayInfo,title }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [characterPerPage, /*setCharacterPerPage*/] = useState(4)
    const indexOfLastCharacter = currentPage * characterPerPage
    const indexOfFirstCharacter = indexOfLastCharacter - characterPerPage
    const currentCharacter = arrayInfo.slice(indexOfFirstCharacter, indexOfLastCharacter)


    return (
        <Container>
            <Heading>
                <h1 className="title">{title}</h1>
                <div></div>
            </Heading>
            <div>
                <NameContainer>
                    {
                        currentCharacter.map((character) => {
                            return (
                                <CharacterCard
                                    name={character.name}
                                />
                            )
                        })
                    }
                </NameContainer>
            </div>
        </Container>
    )
}

export default CharactersModel