import React from 'react'

import './GlobalSpinner.css';

const GlobalSpinner = ({ spinner }) => {
    if (!spinner) return null;
    return (
        <div className="spinner">
            Loading...
        </div>
    )
};

export default GlobalSpinner;