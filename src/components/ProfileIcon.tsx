import React from 'react';
import "../styles/profileIcon.scss";
import {ProfileIconProps} from "../data/Define";

function ProfileIcon(prop:ProfileIconProps):JSX.Element
{
    const {iconSize, storyBorder, image } = prop;       

    return (
        <div className={storyBorder? "storyBorder" : ""}>
           <img 
           className={`profileIcon ${iconSize}`} 
           src={image}
           alt="profile"/> 
        </div>
    );
}

export default ProfileIcon;