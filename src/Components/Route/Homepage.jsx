import React from "react";
import Content from "../Parts/Content";
import Navbar from "../Parts/Navbar";
import AskQuestion from "./AskQuestion";


const Homepage = () => {

    let questionTab = Array.from({ length: 20 }, (_, i) => i + 1)
    console.log(questionTab)
    return (
        <>
            <Navbar />
            {/* <div className="container" >

                <h1 style={{ marginTop: "80px" }} className="mb-3 text-start">Questions</h1>
                <div className="container">
                    {
                        questionTab.splice(0, 10).map((i, j) =>

                            <Content key={j} />


                        )

                    }
                </div>
            </div> */}
            <h1 style={{ marginTop: "80px" }} className="mb-3 text-start">Ask Questions</h1>

            <AskQuestion />
        </>
    )
}

export default Homepage;