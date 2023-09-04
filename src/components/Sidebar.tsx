import React from 'react';
import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import { User } from '../data/Define';
import DB from "../data/DB";

function Sidebar():JSX.Element
{
    let me:User =  DB.Inst.GetUser(0);

    return (
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile 
                userID={me.id}
                caption="" 
                urlText="Switch" 
                iconSize="big" 
                captionSize="small"
                storyBorder={false}
                hideAccountName={false}
                />
                <Suggestions />
                <Footer />
            </div>
        </Sticky>
    );
}

export default Sidebar;