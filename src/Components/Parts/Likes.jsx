import React from 'react'
import { useAuth } from '../Contexts/AuthContext'
import likeIMG from "../../Images/like.png"

const Likes = () => {
    const { currentUser } = useAuth();
    return (
        <>
            <img alt='like' src={likeIMG} style={{ width: "30px", height: "30px" }}></img>
        </>
    )
}

export default Likes