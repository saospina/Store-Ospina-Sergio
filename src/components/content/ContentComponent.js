import React, { useEffect } from 'react'
import usePagination from './ContentPagination.js';


const ContentComponent = ({ getProducts, products, userInfo, handleRedeem }) => {
    const { currentData, maxPage, next, prev, currentPage, jump } = usePagination(products, 8);
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
                                {
                                    userInfo.points < product.cost ?
                                        (<button type="button" className="btn btn-success">
                                            Points needed
                                            <span className="badge rounded-pill bg-info">{product.cost - userInfo.points}</span>
                                        </button>
                                        ) :
                                        (<button type="button" className="btn btn-success"
                                        onClick={() => handleRedeem(product.id)}>
                                            Buy now <span className="badge rounded-pill bg-info">{product.cost}</span>
                                        </button>)
                                }
                                <img src={product.img.hdUrl} className="card-img-top" alt={product.img.hdUrl} />
                                <div className="card-body text-center">
                                    <h6 className="card-subtitle text-muted">{product.category}</h6>
                                    <hr />
                                    <div className="text-muted">{product.name}</div>
                                    <i className="fab fa-shopping-bag"></i>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            {/*Pagination*/}
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


export default ContentComponent;
