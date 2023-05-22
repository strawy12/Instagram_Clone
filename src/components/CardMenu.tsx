import React from 'react';
import "../styles/cardMenu.scss";
import {ReactComponent as Inbox } from "../images/inbox.svg";
import {ReactComponent as Comments } from "../images/comments.svg";
import {ReactComponent as Notifications } from "../images/notifications.svg";
import {ReactComponent as Bookmark } from "../images/bookMark.svg";

function CardMenu():JSX.Element
{
    return(
    <div className="cardMenu">
        <div className='interactions'>
            <Notifications className="icon"/>
            <Comments className="icon"/>
            <Notifications className="icon"/>
            <Inbox className="icon"/>
        </div> 
        <Bookmark className="icon"/>
    </div>
    );
}

export default CardMenu;