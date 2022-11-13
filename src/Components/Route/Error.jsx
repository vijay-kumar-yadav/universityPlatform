import React from "react";
import "./Error.css"

const Error = () => {
    return (<>
        <div className="bg-secondary d-flex vh-100 justify-content-center align-items-center">
            <div className="text-center ">
                <h3 > <i className="fa fa-exclamation-triangle text-warning"
                    aria-hidden="true" /> 404 ERROR</h3>
                <h6 >Page Not Found</h6>
                {/* <button className="btn btn-primary mt-2">Home</button> */}
            </div>
        </div >

    </>)
}


export default Error