import React from "react";
import questionIMG from "../../Images/question.png"
import "./Navbar.css";



const Navbar = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/#">  <img src={questionIMG} width="30" height="30" alt="" /> HustleFlow</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">Ask Question</a>
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