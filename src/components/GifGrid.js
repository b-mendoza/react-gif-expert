import React from 'react';
import useFetchedGifs from '../hooks/useFetchedGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { data: gifs, loading } = useFetchedGifs(category);

    return (
        <div className="card-grid">
            {loading && (
                <p className="animate__animated animate__flash">
                    Loading . . .
                </p>
            )}
            <h2 className="card-category animate__animated animate__slideInUp">
                {category}
            </h2>
            {gifs.map(gif => (
                <GifGridItem key={gif.id} {...gif} />
            ))}
        </div>
    );
};

export default GifGrid;
