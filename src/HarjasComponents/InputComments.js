import React, { useState } from 'react'
import { useEffect } from 'react';

export default function InputComments() {

    //Retain memory on page refresh
    let refreshMemory = ()=> {
        let val = localStorage.getItem('myKey');
        if(val){
            return JSON.parse(localStorage.getItem('myKey'))
        }
        else {
            return [];
        }
    }

    //Declaring states
    const [text, setText] = useState("")
    const [comment, setComment] = useState(refreshMemory());

    useEffect(() => {
        console.log("Effect agya")
        console.log("Comment is: ", comment)
        localStorage.setItem('myKey', JSON.stringify(comment))
    }, [comment])

    //Function to update value in input element
    let changeFunc = (e)=> {
        setText(e.target.value)
    }
    //Function which runs when 'Post' button clicked
    let postFunc = ()=> {
        if(text){
            let temp = [];
            temp = JSON.parse(localStorage.getItem('myKey'));
            const newComment = {id: 123, username:"SSS", body:text}
            temp.push(newComment);

            setComment(temp)
            setText('')
        }
        else{
            alert("Empty Comment")
        }
    }

    return (
        <>
            <div className="inputDiv">
                <h1>Comment Widget</h1>
                <input type="text" placeholder="Enter Comment" value={text} onChange={changeFunc} />
                <button className='btn' onClick={postFunc}>POST</button>
            </div>
        </>
    )
}
