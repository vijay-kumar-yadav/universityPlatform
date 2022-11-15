import React from 'react'
import HTMLReactParser from "html-react-parser";

const Comments = (props) => {
    return (
        <>
            <div
                key={props.index}
                id={props.index}
                className="mb-2 p-2 rounded-4 bg-opacity-25 bg-info ">
                {HTMLReactParser(props.ans.content)}
                <div className="d-flex justify-content-end">
                    <p className="font-italic mt-0 text-end">By - {props.ans.username}</p>
                </div>
            </div>
        </>
    )
}

export default Comments