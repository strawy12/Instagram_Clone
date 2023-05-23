import React, {useState, useEffect} from 'react';
import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import { User }  from "../data/Define";
import Axios,{AxiosResponse} from 'axios';

function Sidebar():JSX.Element
{
    let [myIdx, setMyIdx] = useState<number>(-1);

    useEffect(() => {
        Axios.get('http://localhost:3001/cookie/get').then((res:AxiosResponse) => {
            //setMyIdx(res.data.cookie.userID);
    });
  });

    return (
        <Sticky topOffset={-80}>
            <div className="sidebar">
                <Profile  
                userID={1}
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