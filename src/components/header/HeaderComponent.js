import React, { useEffect } from 'react'

export const HeaderComponent = ({ onUser, userInfo, onPoints }) => {

    useEffect(() => {
        onUser();
    }, [])

    const updateFilters = (event) => {
        const { value } = event.target;
        console.log(value,'selected');
        onPoints(value);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">{userInfo.name}</a>
                <div className="badge badge-pill badge-info">{userInfo.points}</div>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" data-target="#exampleModal">Historical</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                            >About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <div class="form-group">
                                <select
                                    class="custom-select"
                                    onChange={(e) => updateFilters(e)}
                                >
                                    <option selected="">Add more points</option>
                                    <option value="1000">1000 points</option>
                                    <option value="5000">5000 points</option>
                                    <option value="7500">7500 points</option>
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
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more or go to my page</a>
                </p>
            </div>
        </>
    )
}

export default HeaderComponent;
