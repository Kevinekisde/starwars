import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
width:80%;
`

export const CharacterName = styled.div`
   .CharacterNametext{
      text-align: left;
      color: ${({theme}) => theme.subtitle};
      font-size: 16px;
   }

  
`