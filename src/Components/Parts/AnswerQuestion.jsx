import React from "react";
import ReactQuill from "react-quill";
import "./AnswerQuestion.css"
import 'react-quill/dist/quill.bubble.css'

const AnswerQuestion = () => {
    return (
        <>
            <div className="container-fluid" >
                <div className="container">
                    <h2 style={{ marginTop: "80px" }} className="mb-3 ">What is Capital of Uganda?</h2>
                    <ul className="d-flex list-unstyled  my-auto" >
                        <li className="asked  text-secondary">Asked : <span className="text-dark">2 months ago</span></li>
                        <li className="totalAns text-secondary ">Answer : <span className="text-dark">0</span></li>
                    </ul>
                    <hr />
                    <ReactQuill
                        // value={this.state.content}
                        readOnly={true}
                        theme={"bubble"}
                    />
                </div>

            </div>
        </>
    )
}

export default AnswerQuestion