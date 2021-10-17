import React from 'react'
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';
import image from "../images/logo1.png";
import Login from "./Login";
import Shop from "./Shop";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                <NavLink className="nav-link active" aria-current="page" to="/home">

                    <img src={image} alt="logo" width="80px" /></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>

                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/product">Product</NavLink>

                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>


                        </ul>
                        <SignUp />
                        <Login />
                        <Shop />

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
