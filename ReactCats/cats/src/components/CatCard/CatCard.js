import React from 'react';
import'./CatCard.css';


export default function CatCard(props){
    return(
        <div className='card'>
            <h1>Okay</h1>
            <p>{props.image}</p>
            <h3>{props.text}</h3>
        </div>
    )
}