import styled from "styled-components";
import starWars from '../assets/starwarsback.png'


export const InfoContainer = styled.div`
display: flex;
padding: 60px;
gap: 5%;
background-color:${({theme}) => theme.background};
img{
    width:40%;
    height:100%
}

@media (max-width: 480px){
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width:100%;
        height:100%
    }


}

`

export const MovieDetails = styled.div`
width: 70%;
padding:10px;


h1{
    font-size:48px;
    text-align:center;
    color:${({theme}) => theme.text};
    margin-bottom:1%;
    font-weight: 600;
    letter-spacing:0.2em
    
}

p{
    font-size:24px;
    color:#6e6e6d;
    margin-top:2%;
    
}

button{
    margin-top:10px;
    width:30%;
    cursor:pointer;
    color:white;
    border-radius:10px;
    background-color:black;
    padding:10px;
    border:none;
}

@media (max-width: 480px){
    width: 100%;
    padding:10px;

    h1{
        font-size:32px;
        letter-spacing:0.1em
       
        
    }
    button{
        margin-top:10px;
        width:100%;
        cursor:pointer;
        color:white;
        border-radius:5px;
        background-color:black;
        padding:10px;
        border:none;
    }
}

`
export const Description = styled.div`
.resume{
    width:100%;
    color:${({theme}) => theme.text};;
    margin-bottom:20px;
    font-size: 16px;
    text-align: justify;
    font-weight: 100;
    
}
.director{
    font-weight: 500;
    letter-spacing: 1px;
    color:white;
    font-size:18px;
    margin-top:40px;
}
.directorSpan{
    font-size:18px;
    text-align:center;
    color:#6e6e6d;
    margin-right: 20px;
}

@media (max-width: 480px){
    .resume{
        width:100%;
        color:${({theme}) => theme.text};;
        margin-bottom:20px;
        font-size: 12px;
        text-align: justify;
        font-weight: 100;
        
    }
    .director{
        font-size:14px;
    }

}
`
