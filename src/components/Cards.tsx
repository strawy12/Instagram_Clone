import React from 'react';
import "../styles/cards.scss";
import Stories from "./Stories"; 
import Card from "./Card";
import {commentsOne, commentsTwo, commentsThree} from "../data/comments";
import Post1_Image from "../images/PostImages/post_1.png";
import {CardProps} from "../data/Define";

//import Post2_Image from "../images/PostImages/post_2.png";
//import Post3_Image from "../images/PostImages/post_3.png";

function Cards():JSX.Element
{
    return (
        <div className="cards">
            <Stories />

            <Card 
            userID= {1} 
            storyBorder={true} 
            comments={commentsOne} 
            image={Post1_Image} 
            likedByText="dasada" 
            likedByNumber={89} 
            hours={3} 
            />

            <Card 
            userID={2} 
            storyBorder={true} 
            comments={commentsTwo} 
            image={Post1_Image} 
            likedByText="dasada" 
            likedByNumber={89} 
            hours={3} 
            />

            <Card 
            userID={3} 
            storyBorder={true} 
            comments={commentsThree} 
            image={Post1_Image} 
            likedByText="dasada" 
            likedByNumber={89} 
            hours={3} 
            />
        </div>
    );
}

export default Cards;