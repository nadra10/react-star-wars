import React from 'react';
import './starshipCard.css'

const StarShipCard = ({starship}) => {
    return (
        <div className='starshipCard'>
            <h2>{starship.name}</h2>
        </div>
    );
}

export default StarShipCard;
