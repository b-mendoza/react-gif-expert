import React, { useState } from 'react';

import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpert = () => {
    const [categories, setCategories] = useState([]);

    return (
        <>
            <h1>GIF Expert</h1>
            <AddCategory setCategories={setCategories} />
            <hr />

            {categories.map(category => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};

export default GifExpert;
