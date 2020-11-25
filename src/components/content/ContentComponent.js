import React, { useEffect } from 'react'
import usePagination from './ContentPagination.js';
//import PropTypes from 'prop-types'

const ContentComponent = ({ getProducts, products }) => {
    const { currentData, maxPage, next, prev, currentPage, jump } = usePagination(products, 4);
    const pages = [...Array(maxPage).keys()];
    const dataFiltered = currentData();

    useEffect(() => {
        getProducts();
    }, []);


    return (
        <div className="container">
            <div className="row">
                {dataFiltered.map(product => {
                    return (
                        <div className="col-md-3" key={product._id}>
                            <div className="card mb-3 border-info">
                                <img src={product.img.hdUrl} className="card-img-top" alt={product.img.hdUrl} />
                                <div className="card-body text-center">
                                    <h6 className="card-subtitle text-muted">{product.category}</h6>
                                    <hr />
                                    <div className="text-muted">{product.name}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <div>
                <ul className="pagination justify-content-center">
                    <li className="page-item" onClick={prev} >
                        <a className="page-link">&laquo;</a>
                    </li>
                    {pages.map(page =>
                        (<li
                            key={page}
                            className={(page + 1) === currentPage ? "page-item active" : "page-item"}
                            onClick={() => jump(page + 1)}
                        >
                            <a className="page-link">{page + 1}</a>
                        </li>)
                    )}
                    <li className="page-item" onClick={next}>
                        <a className="page-link">&raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

/* ContentComponent.propTypes = {

} */

export default ContentComponent;
