import React from "react";
import "./Content.css"




const Content = () => {


    return (
        <>
            <div className="card mt-2">
                <div className="card-header">
                    <ul className="d-flex list-unstyled  my-auto" >
                        <li className="vote">Votes : 0</li>
                        <li className="totalAns">Answer : 0</li>
                    </ul>
                </div>
                <div className="card-body ">
                    <a className="card-title h5 text-decoration-none " role='button'>Why this kolaveri di?</a>
                    <p className="card-text fs-6">this is description of quesition asked</p>
                    <div className="d-flex justify-content-between ">
                        <div className="d-flex">
                            <p className="tag">Tag 1</p>
                            <p className="tag">Tag 2</p>
                        </div>
                        <p className="askedby">
                            Asked by <span>IMG Vijay</span> on 09-10-22
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Content