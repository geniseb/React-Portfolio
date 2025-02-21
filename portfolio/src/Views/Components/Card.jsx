import React from 'react';
import '../../Styles.css';

const Card = ({ image, title }) => {
    return (

        <div className="card">
            <img src={image} alt="project thumbnail" className="card-images" />
            <div className='card-content'>
                <h3 className="card-title">{title}</h3>
            </div>
        </div>
    )

}

export default Card;