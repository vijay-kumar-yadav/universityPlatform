import React from "react";
import questionIMG from "../../Images/question.png"
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    console.log("hi")
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <NavLink exact className="navbar-brand" to="/">  <img src={questionIMG} width="30" height="30" alt="logo" /> HustleFlow</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeClassname" className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="activeClassname" className="nav-link" to="/askQuestion">Ask Question</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">

                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <a className="btn btn-primary button-google" href="/#" role="login">Login With Google</a>



                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar