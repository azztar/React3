import React from 'react'

const LocationInfo = ({ location }) => {



    return (
        <article className='article'>
            <h2 className='article__location'>{location?.name}</h2>
            <ul className='list__box'>
                <li className='article__list-box'><span>Type: {location?.type}</span></li>
                <li className='article__list'><span>Dimension: {location?.dimension}</span></li>
                <li className='article__list'><span>Population: {location?.residents.length}</span></li>
                
            </ul>


        </article>
    )
}

export default LocationInfo