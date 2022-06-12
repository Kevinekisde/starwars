import styled from "styled-components";

export const Container = styled.div`
width:100%;
background-color:#111111;
display:flex;
flex-direction: column;
align-items: center;

`

export const ContainerInfo = styled.div`
padding:1%;
width:90%;
`
export const PersonalInfo = styled.div`

margin-bottom:1%;
display:flex;
justify-content: center;
align-items: center;

`

export const Info = styled.div`

h1{
    color:white;
    font-family: "Roboto";
    font-size:32px;
    margin-bottom:20px;
}

p{
    text-align:center;
    color:white;
    font-size:18px;
    font-family: "Roboto";
}
@media (max-width: 480px){
    h1{
        margin-top:10px;
        font-size:18px;
    }
}
`

export const Bar = styled.div`
width: 100%;
height: 1px;
background-color: white;
`


export const ContactInfo = styled.div`
width:100%;
display:flex;
align-items: center;
justify-content: center;
padding:20px;
gap:20px;

a{
    color:white;
    font-size: 32px;
}

`

