import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar"
import { useAuth } from "../Contexts/AuthContext";
import "./AnswerQuestion.css"
import 'react-quill/dist/quill.bubble.css'
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import HTMLReactParser from "html-react-parser";
const AnswerQuestion = () => {
    const { currentUser } = useAuth()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const questionId = window.location.href.split("?")[1];
    const [ansList, setAnsList] = useState([]);
    const [getData, setData] = useState({});

    const getQues = async () => {
        const getCollectionRef = collection(db, "askedQuestion")
        const data = await getDocs(getCollectionRef)
        return data.docs
    }
    const getAns = async () => {
        const getAnswerRef = collection(db, "answers")
        const answer = await getDocs(getAnswerRef)
        return answer.docs
    }
    useEffect(
        () => {
            getQues().then((data) => {
                const docs = data.filter((doc) => doc.id === questionId)
                return (setData(docs[0].data()))
            })
            getAns().then((data) => {
                let requireAns = data.filter((data) => data.data().questionid === questionId)
                setAnsList(requireAns)
            })
        }, [questionId]
    )
    // console.log(docs[0].data())
    const [userInfo, setuserInfo] = useState({
        description: '',
    });
    const ondescription = (value) => {
        setuserInfo({
            ...userInfo,
            description: value
        });
    }
    const date = new Date();
    const postCollectionRef = collection(db, "answers")
    const createPost = async () => {
        let user = currentUser.uid;
        console.log(user)
        await addDoc(postCollectionRef, {
            questionid: questionId,
            content: userInfo.description,
            answerAt: date,
            username: currentUser.displayName
        })
    }
    const postAns = () => {
        if (userInfo.description === '') {
            setError("Please fill the answer field.")
            setTimeout(() => {
                setError("");
            }, 2000)
            return
        }
        if (!currentUser) {
            setError("Please Login !")
            setTimeout(() => {
                setError("");
            }, 2000)
            return
        }
        else
            setError("")

        // let currentSessionInfo = {
        //     title: userInfo.title,
        //     description: userInfo.description,
        //     tags: tagSelected
        // }
        try {
            createPost().then(() => {
                setSuccess("Answer Posted")
                setTimeout(() => {
                    setSuccess("");
                }, 2000)
            });
        }
        catch {
            setError("Answer not posted")
            setTimeout(() => {
                setError("");
            }, 2000)
        }
        // if (userInfo.title && tagSelected.length !== 0) {

        // }
        // console.log(currentSessionInfo)

    }
    return (
        <>
            <div className="container-fluid" >
                <div className="container">
                    <h2 style={{ marginTop: "80px" }} className="mb-3 ">{getData.title}</h2>
                    <ul className="d-flex list-unstyled  my-auto" >
                        <li className="asked  text-secondary">Asked : <span className="text-dark">{getData.username}</span></li>
                        <li className="totalAns text-secondary ">Answer : <span className="text-dark">{ansList.length}</span></li>
                    </ul>
                    <hr />
                    <ReactQuill
                        value={getData.content}

                        readOnly={true}
                        theme={"bubble"}
                    />
                    <hr />
                    <h4 className="text-center text-bg-success">Answers</h4>
                    {
                        ansList.length !== 0 ?
                            <>


                                {ansList.map((data, index) => {
                                    const ans = data.data()

                                    return (
                                        <>
                                            {/* <div dangerouslySetInnerHTML={ans.content}></div> */}
                                            <div className="mb-2 p-2 rounded-4 bg-opacity-25 bg-info">
                                                {HTMLReactParser(ans.content)}
                                                <p className="font-italic mt-0 text-end">By - {ans.username}</p>
                                            </div>

                                        </>
                                    )
                                })}
                            </>
                            : ""
                    }
                    <hr />
                    <div className="container w-100">
                        <EditorToolbar toolbarId={'t1'} />
                        <ReactQuill
                            theme="snow"
                            id="description"
                            value={userInfo.description}
                            onChange={ondescription}
                            placeholder={"Write Description Here..."}
                            modules={modules('t1')}
                            formats={formats}
                        />
                    </div>
                    <div className="text-center mt-3">
                        {success && <p className="text-success text-center">{success}</p>}
                        {error && <p className="text-danger text-center ">{error}</p>}
                        <button className="btn btn-primary" onClick={postAns}>
                            PostAns
                        </button>
                    </div>
                    <hr />

                </div>

            </div>
        </>
    )
}

export default AnswerQuestion