import React from 'react';
import "../styles/comment.scss";
import {CommentData} from "../data/Define";

function Comment(prop:CommentData):JSX.Element
{

    return (
    <div className="commentContainer">
        <div className='accountName'>{prop.user}</div>
        <div className='comment'>{prop.text}</div>
    </div>
    );
}

export default Comment;