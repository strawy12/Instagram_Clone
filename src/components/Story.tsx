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

    return (
        <div className="story">
        <ProfileIcon iconSize="big" storyBorder={true} image={user.imageLink} />
        <span className="accountName">{user.name}</span> 
        </div>
    );
}

export default Story;