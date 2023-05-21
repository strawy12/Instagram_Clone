import React from 'react';
import "../styles/menu.scss";
import {ReactComponent as Home } from "../images/home.svg";
import {ReactComponent as Inbox } from "../images/inbox.svg";
import {ReactComponent as Explore } from "../images/explore.svg";
import {ReactComponent as Notifications } from "../images/notifications.svg";
import ProfileIcon from "./ProfileIcon";
import { User } from '../data/Define';
import DB from "../data/DB";


function Menu(): JSX.Element
{
    let me:User =  DB.Inst.GetUser(0);

    return(
    <div className="menu">
        <Home className="icon"/>
        <Inbox className="icon"/>
        <Explore className="icon"/>
        <Notifications className="icon"/>
        <ProfileIcon iconSize="small" image={me.imageLink} storyBorder={true}/>
    </div> 
    );
}

export default Menu;