import React from 'react'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div className="header__container">
            <div className="header__logo">
                <Link to="/">
                <h1>Movies</h1>
                </Link>
            </div>
            <div className="header__navbar">
                <Link to="/">
                <div className="nav__item">
                 <h4>Watch List</h4>
                </div>
                </Link>
                <Link to="/watched">
                <div className="nav__item">
                 <h4>Watched</h4>
                </div>
                </Link>
                <Link to="/add">
                <div className="nav__item">
                 <h4>
                 <i className="fas fa-plus-square"></i>
                 Add</h4>
                </div>
                </Link>
            </div>
        </div>
    )
}
