import styled from "styled-components";


export const Container = styled.div`
width:100%;
min-height:100vh;
display: flex;
justify-content:center;
align-items:center;
gap:20px;
background-color:${({theme}) => theme.background};

@media (max-width: 480px){
    display: flex;
    gap:50px;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width:100%;

}

`



export const InfoContainer = styled.div`

width:40%;
text-align:center;
h1{
    color:${({theme})=> theme.text};
}

@media (max-width: 480px){
    width:90%;
    h1{
        font-weight: 400;
        font-size:15px;
    }
}


`