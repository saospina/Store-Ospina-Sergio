import React, { useEffect } from 'react'

import './HeaderComponent.css';

export const HeaderComponent = ({ onUser, userInfo, onPoints, onHistory }) => {
    const pricesList = [
        {
            value: 0,
            key: 'Add Points'
        },
        {
            value: 1000,
            key: '1000 points'
        },
        {
            value: 5000,
            key: '5000 points'
        },
        {
            value: 7500,
            key: '7500 points'
        }
    ];

    useEffect(() => {
        onUser();
    }, [])

    const handleHistory = () => {
        onHistory();
    }

    const updateFilters = (event) => {
        const { value } = event.target;
        onPoints(value);
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div>
                    <span className="navbar-brand">{userInfo.name}</span>
                    <span className="badge badge-pill badge-info custom-badge-pill">{userInfo.points}</span>
                </div>

                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor03"
                    aria-controls="navbarColor03"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mr-5 ml-5">
                            <button
                                type="button"
                                className="btn btn-info"
                                onClick={() => handleHistory()}
                            >
                                Shopping history
                                <span className="badge badge-pill badge-info">

                                </span>
                            </button>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="form-group search-button ">
                                <select
                                    className="custom-select"
                                    onChange={(e) => updateFilters(e)}
                                >
                                    {pricesList.map((price, index) =>
                                        <option
                                            key={index}
                                            defaultValue="0"
                                            value={price.value}>{price.key}
                                        </option>
                                    )}
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="jumbotron">
                <h1 className="display-3">Reward Store</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg"
                        href="https://saospina.github.io/sergio.ospina/"
                        target="_blank"
                        role="button">
                        Learn more about me going to my webpage
                        </a>
                </p>
            </div>
        </>
    )
}

export default HeaderComponent;
