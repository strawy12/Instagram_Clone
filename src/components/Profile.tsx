import React, {useState, useEffect } from 'react';
import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import { ProfileProps,User  } from "../data/Define";
import Axios,{AxiosResponse} from 'axios'; 


function Profile(props:ProfileProps):JSX.Element
{
    let { userID, caption, urlText, iconSize, captionSize, storyBorder, hideAccountName} = props;

    if(caption && caption.length > 28)
    {
        caption = caption.substring(0, 28) + "...";
    }

    let [user, setUser] = useState<User>();
    useEffect(() => 
    {
        Axios.get('http://localhost:3001/getUser/', {params:props.userID}).then((res:AxiosResponse) =>
        {
            setUser(res.data);
        });
    });
    
    let accountName:string = user? user.name: "";
    caption = caption != 'userName' ? caption : user ? user.userID: ""; 

    return (<div className="profile">
        <ProfileIcon 
            iconSize = {iconSize} 
            storyBorder = {storyBorder}  
            image = {user ? user.imageLink : ""}
        />
        {(accountName || caption) && !hideAccountName &&
        (
            <div className="textContainer">
                <span className="accountName">{accountName}</span>
                <span className={caption ? `caption ${captionSize}`: ''}>{caption}</span>
            </div>
        )}
        <a href="/">{urlText}</a>
    </div>);
}

export default Profile;