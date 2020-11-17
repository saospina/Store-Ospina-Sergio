import React, { useEffect } from 'react'
//import PropTypes from 'prop-types'

const ContentComponent = ({ getListProducts, productsList }) => {


    useEffect(() => {
        getListProducts()
    }, [])

    console.log(productsList, 'I am in the component');
    return (
        <div className="container">
            <div className="row">
                {productsList.map(product => {
                    return (
                        <div className="col-md-3" key={product._id}>
                            <div className="card mb-3 border-info">
                                <h4 class="card-title">Card title Pill</h4>
                                <img src={product.img.hdUrl} class="card-img-top" alt={product.img.hdUrl} />
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
                                    <div className="card-footer text-muted">
                                        2 days ago
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

/* ContentComponent.propTypes = {

} */

export default ContentComponent
