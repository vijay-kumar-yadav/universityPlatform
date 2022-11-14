import React, { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar"
import "./AskQuestionForm.css";
import "react-quill/dist/quill.snow.css";
import { TagsInput } from "react-tag-input-component"
import { useAuth } from "../Contexts/AuthContext";
import { Alert } from "react-bootstrap";

const AskQuestionForm = () => {
    // const [userInfo, setuserInfo] = useState({
    //     title: '',
    //     description: '',
    //     information: '',
    //   });
    const { currentUser } = useAuth();
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [tagSelected, setTagSelected] = useState([]);
    // const [charCount, setCharCount] = useState(0);
    const [userInfo, setuserInfo] = useState({
        title: '',
        description: '',
    });
    const ondescription = (value) => {
        setuserInfo({
            ...userInfo,
            description: value
        });
    }
    const onChangeValue = (e) => {
        setuserInfo({
            ...userInfo,
            title: e.target.value
        });
    }
    const postQues = (e) => {
        e.preventDefault();
        if (!currentUser) {
            setError("Please Login !")
            setTimeout(() => {
                setError("");
            }, 2000)
        }
        else
            setError("")

        let currentSessionInfo = {
            title: userInfo.title,
            description: userInfo.description,
            tags: tagSelected
        }
        if (userInfo.title && tagSelected.length !== 0) {
            setSuccess("Question Posted")
            setTimeout(() => {
                setSuccess("");
            }, 2000)
        }
        console.log(currentSessionInfo)
        return false;
    }

    return (
        <>
            {success && <Alert variant="success">{success}</Alert>}
            <div className=" d-flex justify-content-center container-fluid pt-0 p-2 w-75">
                <form className="row" onSubmit={postQues}>
                    <div className="col-12 p-2" >
                        <label htmlFor="question" className="form-label h5">Title</label>
                        <p className="form-text">Be specific and imagine you’re asking a question to another person</p>
                        <input name="question" type={"text"} placeholder={"What is the capital of Uganda?"} className="form-control"
                            value={userInfo.title} onChange={onChangeValue} />
                    </div>
                    <div className="col-12 p-2">
                        <label htmlFor="description" className="form-label h5">What are the details of your problem?</label>
                        <p className="form-text">Introduce the problem and expand on what you put in the title. Minimum 20 characters.</p>
                        {/* <textarea placeholder="Details here..." name="description" className="form-control" /> */}

                        <div className="form-control describe" name="description" >


                            <EditorToolbar toolbarId={'t1'} />
                            <ReactQuill
                                theme="snow"
                                value={userInfo.description}
                                onChange={ondescription}
                                placeholder={"Write Description Here..."}
                                modules={modules('t1')}
                                formats={formats}

                            />
                            {/* <p className="form-text">Char: {charCount}</p> */}
                        </div>
                    </div>
                    <div className="col-12 p-2">
                        <label htmlFor="tags" className="form-label h5">Tags</label>
                        <p className="form-text">Add up to 5 tags to describe what your question is about.</p>
                        {/* <div id="tagDiv"></div> */}
                        {/* <input name="tags" className="form-control" onChange={onChangeTagValue} value={userInfo.tags.slice(-1)[0]} placeholder="English, C++, Java, Math..." /> */}

                        <TagsInput
                            name="tags" className="tagsInput form-control"
                            value={tagSelected}
                            onChange={setTagSelected}
                            placeHolder=" English, C++, Java, Math..."
                        />

                    </div>
                    <div className="col-12 d-flex0 ">
                        <button type="submit" className="btn btn-primary m-2">Post</button>
                        {error && <p className="text-danger text-center ">{error}</p>}
                    </div>
                </form>
            </div >

        </>
    )
}

export default AskQuestionForm;