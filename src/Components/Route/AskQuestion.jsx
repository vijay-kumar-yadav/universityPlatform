import React from "react";
import AskQuestionForm from "../Parts/AskQuestionForm";

const AskQuestion = () => {
    return (
        <>
            <div className="container-fluid" >
                <h1 style={{ marginTop: "80px" }} className="mb-3 text-center">Ask Questions</h1>

                <AskQuestionForm />
            </div>
        </>
    )
}


export default AskQuestion