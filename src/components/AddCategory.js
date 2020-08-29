import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = e => setInputValue(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();

        if (inputValue.trim().length >= 1) {
            setCategories(categories => [inputValue.trim(), ...categories]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search for a GIF"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
