
import React from 'react';
import "../styles/navigations.scss"
import logo from "../images/InstagramLogo.png";
import Menu from "./Menu";
import {ReactComponent as Home } from "../images/home.svg";
import {ReactComponent as Inbox } from "../images/inbox.svg";
import {ReactComponent as Explore } from "../images/explore.svg";
import {ReactComponent as Notifications } from "../images/notifications.svg";
import { ReactComponent as Reels} from "../images/reels.svg";
import { ReactComponent as Make} from "../images/make.svg";
import { ReactComponent as Search} from "../images/search.svg";
import { ReactComponent as Setting} from "../images/Setting.svg";
import ProfileIcon from "./ProfileIcon";


function Navigation():JSX.Element
{
    return(
    <div className="navigation">
        <div className="container">
        <img className="logo" src={logo} alt="instagram logo"/>
        <Menu style={<Home className="icon"/>} text='홈'/>
        <Menu style={<Search className="icon"/>} text = '검색'/>
        <Menu style={<Explore className="icon"/>} text='탐색 탭'/>
        <Menu style={<Reels className="icon"/>} text='릴스'/>
        <Menu style={<Inbox className="icon"/>} text='메시지'/>
        <Menu style={<Notifications className="icon"/>} text='알림'/>
        <Menu style={<Make className="icon"/>} text='만들기'/>
        <Menu style={<ProfileIcon iconSize="small" image={""} storyBorder={false} />} text='프로필'/>
        <Menu style={<Setting className="icon"/>} text='더 보기'/>
        </div>
    </div>
        )

}

export default Navigation;