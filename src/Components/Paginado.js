/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import s from '../Styles/pagination.module.css'


export default function Paginado ({characterPerPage, allCharacters,paginado}) {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(allCharacters/characterPerPage); i++) {
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className={s.paginado}>
                {pageNumbers &&
                pageNumbers.map(number =>{
                    return(
                    <li className="number" key={number}>
                    <a onClick={() => paginado(number)}>{number}</a>
                    </li>
                    )
                })}
            </ul>
        </nav>
    )
}