import React, { useState } from "react";
// import "./Signup.css"
import { useForm } from "react-hook-form"
// import $ from "jquery"
const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        // $("resetForm")
        console.log(data)
        setDataVal({
            name: "",
            email: "",
            password: ""
        })
        console.log(dataVal)
    };
    const [dataVal, setDataVal] = useState({
        name: "",
        email: "",
        password: ""
    })
    return (
        <>
            {/* <section className="vh-100 bg-image"
                style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"> */}

            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

            <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>

                <div className="d-flex flex-row align-items-center mb-4">

                    <div className="form-outline flex-fill mb-0">
                        {errors.name?.type === 'required' ? <label className="form-label text-danger" htmlFor="userName" role="alert">Name</label> :
                            <label className="form-label" htmlFor="userName">Name</label>

                        }
                        <input type="text" id="userName" className="form-control"{...register("name", { required: true, maxLength: 20 })} value={dataVal.name || ""} onChange={(e) => { setDataVal({ ...dataVal, name: e.target.value }) }} />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        {errors.email ? <label role="alert" className=" text-danger form-label" htmlFor="userEmail"> Email</label> :

                            <label className="form-label" htmlFor="userEmail"> Email</label>
                        }
                        <input type="email" id="userEmail" className="form-control" {...register("email", { required: "Email Address is required" })} value={dataVal.email || ""} onChange={(e) => { setDataVal({ ...dataVal, email: e.target.value }) }} />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                        {errors.password?.type === 'required' ? <label role="alert" className="form-label" htmlFor="userPassword text-danger">Password</label> :
                            <label className="form-label" htmlFor="userPassword">Password</label>

                        }
                        <input type="password" id="userPassword" className="form-control" {...register("password", { required: "Please enter password" })} value={dataVal.password || ""} onChange={(e) => { setDataVal({ ...dataVal, password: e.target.value }) }} />

                    </div>
                </div>

                {/* <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" {...register} />
                                                    <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                </div>
                                            </div> */}

                {/* <div className="form-check d-flex justify-content-center mb-5">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div> */}

                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                </div>

            </form>

            {/* </section> */}
        </>
    )
}

export default Signup