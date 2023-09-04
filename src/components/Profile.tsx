import React from 'react';
import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import { ProfileProps, User } from "../data/Define";
import DB from "../data/DB";



function Profile(props:ProfileProps):JSX.Element
{
    let { userID, caption, urlText, iconSize, captionSize, storyBorder, hideAccountName} = props;

    if(caption && caption.length > 28)
    {
        caption = caption.substring(0, 28) + "...";
    }

    let user:User = DB.Inst.GetUser(userID);
    let accountName:string = user.username;
    caption = caption ? caption : user.name; 

    return (<div className="profile">
        <ProfileIcon 
            iconSize = {iconSize} 
            storyBorder = {storyBorder}  
            image = {user.imageLink}
        />
        {(accountName || caption) && !hideAccountName &&
        (
            <div className="textContainer">
                <span className="accountName">{accountName}</span>
                <span className={`caption ${captionSize}`}>{caption}</span>
            </div>
        )}
        <a href="/">{urlText}</a>
    </div>);
}

export default Profile;