import styled from 'styled-components'

export const Container = styled.div`
margin-top:40px;

`

export const Heading = styled.div`
display:flex;
gap: 30px;
align-items:center;
white-space:nowrap;
justify-content: center;

.title{
    color:${({theme}) => theme.text};
    font-size: 20px;
    font-weight: 600;
    letter-spacing:0.1em
    
}


div{
    width: 100%;
    height: 1px;
    background-color: ${({theme}) => theme.bar};
    text-align:center;
}

@media (max-width: 480px){
    .title{
        color:${({theme}) => theme.text};
        font-size: 15px;
        font-weight: 600;
        letter-spacing:0.1em
        
    }
}
`


export const NameContainer = styled.div`
    margin-top:40px;
    margin-bottom:20px;
    display:grid;
    align-items: center;
    justify-content: center;
    justify-items: start;
    gap: 20px;
    grid-template-columns: repeat(3,1fr);

    @media (max-width: 480px){
        grid-template-columns: repeat(2,1fr);
    }

  
`