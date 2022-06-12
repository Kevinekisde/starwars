import styled from 'styled-components'


export const Container = styled.div`
background-color:#151515;
width:100%;
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:50px;


`

export const Titles = styled.div`
text-align:center;
h1{
    color:white;
    font-size:64px;
}

p{
    font-weigth:500;
    color:white;
}
`

export const Factions = styled.div`
width:60%;
display:flex;
gap:20px;

@media (max-width: 480px){
width:90%;

}


`

export const CardJedi = styled.div`
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
background-color:white;
height:10%;
padding:10px;
width:100%;
gap:20px;
align-items: center;
border-radius:10px;

h1{
    color:black;
    font-size:24px;
    font-weigth:300;
    letter-spacing:0.2em;
}
button{
    padding:10px;
    font-size:15px;
    width:100%;
    background-color:#0370f8;
    cursor:pointer;
    border-radius:10px;
    color:white;
    border:none;
}
@media (max-width: 480px){


}

`
export const CardSith = styled.div`
display:flex;
flex-direction:column;
text-align:center;
justify-content:center;
background-color:black;
height:10%;
padding:10px;
width:100%;
gap:20px;
align-items: center;
border-radius:10px;

h1{
    color:white;
    font-size:24px;
    font-weigth:300;
    letter-spacing:0.2em;
}
button{
    padding:10px;
    font-size:15px;
    width:100%;
    background-color:#a52427;
    cursor:pointer;
    border-radius:10px;
    border:none;
}

`