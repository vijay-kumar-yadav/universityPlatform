import React, { useState } from "react";
import ReactQuill from "react-quill";
import "./AskQuestionForm.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar"
import "react-quill/dist/quill.snow.css";

const AskQuestionForm = () => {

    // const [userInfo, setuserInfo] = useState({
    //     title: '',
    //     description: '',
    //     information: '',
    //   });
    const [userInfo, setuserInfo] = useState({

        description: '',

    });
    const ondescription = (value) => {
        setuserInfo({
            description: value
        });
    }
    return (
        <>
            <div className=" d-flex justify-content-center container-fluid p-5">
                <form className="row">
                    <div className="col-12 p-2">
                        <label htmlFor="question" className="form-label h5">Title</label>
                        <p className="form-text">Be specific and imagine you’re asking a question to another person</p>
                        <input name="question" type={"text"} placeholder={"What is the capital of Uganda?"} className="form-control" />
                    </div>
                    <div className="col-12 p-2">
                        <label htmlFor="description" className="form-label h5">What are the details of your problem?</label>
                        <p className="form-text">Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                        {/* <textarea placeholder="Details here..." name="description" className="form-control" /> */}

                        <div className="form-control" name="description" >


                            <EditorToolbar toolbarId={'t1'} />
                            <ReactQuill
                                theme="snow"
                                value={userInfo.description}
                                onChange={ondescription}
                                placeholder={"Write Description Here..."}
                                modules={modules('t1')}
                                formats={formats}
                            />
                        </div>
                    </div>
                    <div className="col-12 p-2">
                        <label htmlFor="tags" className="form-label h5">Tags</label>
                        <p className="form-text">Add up to 5 tags to describe what your question is about.</p>
                        <div id="tagDiv"></div>
                        <input name="tags" className="form-control" placeholder="English, C++, Java, Math..." />
                    </div>
                    <div className="col-12 ">
                        <button type="submit" className="btn btn-primary m-2">Post</button>
                        <button className="btn btn-danger m-2">Clear</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default AskQuestionForm;