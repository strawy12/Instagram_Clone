import React from 'react';
import "../styles/story.scss";
import ProfileIcon from "./ProfileIcon";
import { User } from '../data/Define';

interface StoryProp
{
    user:User
}

function Story(prop:StoryProp):JSX.Element
{
    let { user } = prop;
    if(user.username.length > 10) {
        user.username = user.username.substring(0, 10) + "...";
    }


    return (
        <div className="story">
        <ProfileIcon iconSize="big" storyBorder={Math.floor(Math.random() * 2) == 0} image={user.imageLink} />
        <span className="accountName">{user.username}</span> 
        </div>
    );
}

export default Story;