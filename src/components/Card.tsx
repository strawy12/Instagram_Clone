import React, { useState, useEffect } from 'react';
import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import LikeBy from './LikeBy';
import {CardData, User} from '../data/Define';
import Axios, {AxiosResponse} from 'axios';

function CardText(prop:{text: string}):JSX.Element
{
    let {text} = prop;
    let [isMore, setIsMore] = useState<boolean>(true);
    let temp:string = "";
    if(text.indexOf('\n') != -1)
    {
        temp = text.substring(0, text.indexOf('\n')) + "..."; 
        isMore = false;
    }

    else if(text.length > 20)
    {
        temp = text.substring(0, 20) + "..."; 
        isMore = false;
    }

    return (
        <div className='cardText'>
            {
                !isMore ?
                <div>
                {temp}
                <button className='moreBtn' onClick={() => setIsMore(true)}>
                더 보기
                </button>
                </div>
                :
                <div>
                {text}
                </div>
            }
            
                
           
        </div>
    );
}


function Card(props:CardData):JSX.Element
{
    return (
    <div className="card">
        <header>
            <Profile 
                userID={props.userID} 
                iconSize="medium"
                storyBorder={true}
                captionSize=''
                caption=''
                urlText=''
                hideAccountName={true}
            />
            <CardButton className="cardButton" />
        </header>

        <img className="cardImage" src={props.imageName} alt="card content" />
        <CardMenu />
        <LikeBy likeByUserID={props.likedUserID} />
        <CardText text = {props.text} />

        <div className="timePosted">HOURS AGO</div>
        <div className="addComment">
            <div className="commentText">Add a comment...</div>
            <div className="postText">POST</div>
        </div>

    </div>
    );
}

export default Card;