import React from 'react';
import '../../Styles.css';

const Card = ({ image, title, link }) => {
  return (
    <>
      <div className="card">
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">

          <img className="card-images" src={image} alt={title} />
          <div className="card-header">{title}</div>

        </a>
      </div>
    </>
  );
};

export default Card;