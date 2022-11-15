import React, { useState } from "react";
import questionIMG from "../../Images/question.png"
import "./Navbar.css";
import userIMG from "../../Images/user.png"
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { Alert, NavDropdown } from "react-bootstrap";

const Navbar = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory();
    async function handleLogout() {
        setError('');
        try {
            await logout();
            history.push("/")
        } catch {
            setError('Failed to log out');
        }
    }
    console.log(currentUser)
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
                        {/* <form className="d-flex" role="search">

                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form> */}
                        {/* {currentUser ? currentUser.displayName : ""} */}
                        {currentUser ?
                            <>
                                <NavDropdown title={<img title={"User: " + currentUser.displayName} src={userIMG} alt="user" style={{ width: "20px", height: "20px" }}></img>}>
                                    <NavLink className="dropdown-item" to="/updateProfile" >Profile</NavLink>
                                    <NavDropdown.Item onClick={handleLogout} >Log out</NavDropdown.Item>
                                </NavDropdown>
                            </>

                            : <NavLink className="btn btn-primary button-google" to="/login">Login</NavLink>}
                    </div>
                </div>
            </nav>
            {error && <Alert variant="danger">{error}</Alert>}
        </>
    )
}

export default Navbar