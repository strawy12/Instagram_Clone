import React from 'react';
import "../styles/card.scss";
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import {CardProps} from "../data/Define";




function Card(props:CardProps):JSX.Element
{

    return (
    <div className="card">
        <header>
            <Profile 
                userID={props.userID} 
                iconSize="medium" 
                storyBorder={props.storyBorder} 
                captionSize=''
                caption=''
                urlText=''
                hideAccountName={false}
                />
            <CardButton className="cardButton" />
        </header>

        <img className="cardImage" src={props.image} alt="card content" />
        <CardMenu />
        <div className="likedBy">
        <Profile 
                userID={props.userID} 
                iconSize="small" 
                storyBorder={props.storyBorder} 
                captionSize=''
                caption=''
                urlText=''
                hideAccountName={true}
                />
            <span>
                Like By <strong>{props.likedByText}</strong> and{" "} <strong>{props.likedByNumber} others</strong>
            </span>
        </div>

        <div className="comments">
        {props.comments.map((comment) => {
          return (
            <Comment
              id={comment.id}
              user={comment.user}
              text={comment.text}
            />
          );
        })}
        </div>
        
        <div className="timePosted">{props.hours} HOURS AGO</div>
        <div className="addComment">
            <div className="commentText">Add a comment...</div>
            <div className="postText">POST</div>
        </div>

    </div>
    );
}

export default Card;