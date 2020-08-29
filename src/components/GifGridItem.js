import React from 'react';

const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__slideInUp">
            <img src={url} alt={title} />
            <p className="card-title">{title}</p>
        </div>
    );
};

export default GifGridItem;
