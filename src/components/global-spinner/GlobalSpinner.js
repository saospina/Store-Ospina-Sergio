import React from 'react'

import './GlobalSpinner.css';

const GlobalSpinner = ({ spinner }) => {

    const spinnerStyle = {
        width: '3rem',
        height: '3rem'
    }
    if (!spinner) return null;
    return (
        <div className="spinner text-center text-info">
            <div className="spinner-border" style={spinnerStyle} role="status">
            </div>
            <div className="spinner-grow" style={spinnerStyle} role="status">
            </div>
        </div>

    )
};

export default GlobalSpinner;