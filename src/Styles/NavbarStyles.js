import styled from "styled-components";
import stars from '../assets/stars.jpg'


export const Container = styled.div`
width: 100%;
display:flex;
align-items: center;
justify-content: space-between;
background-color:black;
background-image: url(${stars});
background-size: cover;

button{
    font-size:16px;
    height:20%;
    padding:20px;
    border:none;
    background:none;
    color:${({theme}) => theme.textButtonBack};
}

img{
    width: 10%;
}


@media (max-width: 480px){
    width:100%;
    display:flex;
    align-items: center;
    background-color:black;
    background-image: url(${stars});
    background-size: cover;

    button{
        font-size:12px;
        height:10%;
        padding:10px;
    }
    img{
        text-align:center;
        width: 30%;
        margin-right:13%;
    }

    
}


`