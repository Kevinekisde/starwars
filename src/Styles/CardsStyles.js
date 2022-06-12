import styled from 'styled-components'

export const Card  = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #282626;
    width: 350px;
    height: 500px;
    border-radius:15px;
    align-items: center;
    transition: all 0.2s;
    margin-bottom:80px;
    opacity: 0.8;

    &:hover{
        transform: scale(1.02);
        opacity: 1;
    }
    img{
        border-radius: 10px;
        width:100%;
        height:100%;
        object-fit: cover;
    }

`