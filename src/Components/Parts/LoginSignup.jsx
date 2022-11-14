import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";


const LoginSignup = () => {
    const [login, setLogin] = useState(false)
    return (
        <>
            <div className="container h-100" style={{ marginTop: "80px" }}>
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        {login ? <Login /> :
                                            <Signup />}
                                        <div className="text-center">
                                            <p style={{ cursor: "default" }}>{login ? "Don't have an Account?" : "Have an Account?"} <a className="text-primary text-decoration-none" style={{ cursor: "pointer" }} onClick={() => setLogin(!login)}>{login ? "Register" : "Login"}</a></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginSignup