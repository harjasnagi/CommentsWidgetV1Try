import React, { useState } from 'react'
import { useEffect } from 'react';
import Comments from './Comments';


export default function StoredComments() {

    //Fetching comments stored in local storage
    const [backendComments, setbackendComments] = useState([]);
    useEffect(() => {
        let myObj = [];
        myObj = JSON.parse(localStorage.getItem('myKey'));
        backendComments.push(myObj);
        setbackendComments(myObj)
    }, [backendComments]); 

    return (
        <>
            {backendComments.map((backendComment)=>{
                return(
                    <Comments key={backendComment.id} commentId={backendComment.id} commentBody={backendComment.body}/>
                )
            })}
        </>
    )
}
