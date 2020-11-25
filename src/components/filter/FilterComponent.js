import React from 'react'

export const FilterComponent = ({ getMostRecentProducts, getLowestPriceProducts, getHighestPriceProducts }) => {

    return (
        <div className="container my-5">
            <h6>Sort by:</h6>
            <button
                type="button"
                className="btn btn-outline-info mr-3"
                onClick={() => getMostRecentProducts()}>
                Most Recent</button>
            <button
                type="button"
                className="btn btn-outline-info mr-3"
                onClick={() => getLowestPriceProducts()}>
                Lowest Price
                </button>
            <button
                type="button"
                className="btn btn-outline-info mr-3"
                onClick={() => getHighestPriceProducts()}>
                Highest Price
                </button>
            <hr className="border border-secondary my-5" />

        </div>
    )
}

export default FilterComponent;
