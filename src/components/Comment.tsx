import React from 'react';
import "../styles/comment.scss";
import {CommentData} from "../data/Define";

function Comment(prop:CommentData):JSX.Element
{

    return (
    <div className="commentContainer">
        <div className='accountName'>userName</div>
        <div className='comment'>text</div>
    </div>
    );
}

export default Comment;