import React, { useEffect, useState } from "react";
import Content from "../Parts/Content";
import { db } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore'
const Homepage = () => {
    const [postList, setPostList] = useState([]);
    const getQues = async () => {
        const getCollectionRef = collection(db, "askedQuestion")
        const data = await getDocs(getCollectionRef)
        setPostList(data.docs)
        console.log(data.docs[0].id)

    }
    useEffect(
        () => {
            getQues()
        }, []
    )

    return (
        <>

            <div className="container" >

                <h1 style={{ marginTop: "80px" }} className="mb-3 text-center">Questions</h1>
                <div className="container">

                    {postList.length !== 0 ?
                        postList.map((doc, j) => {
                            const question = doc.data();
                            return (<Content key={j} question={question} id={doc.id} />)
                        }) : <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>

                    }
                </div>
            </div>

        </>
    )
}

export default Homepage;