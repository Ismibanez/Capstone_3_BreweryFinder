import React from 'react';

const Card = ({ beerName, description, abv }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow mb-3 bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{beerName}</h2>
                <p>{description}</p>
                <p>{abv}</p>
            </div>
        </div>
    )
}


export default Card;