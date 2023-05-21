import React from 'react';
import "../styles/stories.scss";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "./Story";
import DB from "../data/DB";



function Stories():JSX.Element
{

    function GetStories()
    {
        let stories = [];
        let users = DB.Inst.RandomUserList();   
        
        for(let i = 0; i < 10; i++)
        {
            stories.push(
                <Story user={users[i]}/>
            )
        }

        return stories;
    }

    return (
        <div className="stories">
        <HorizontalScroll className="scroll" reverseScroll={true}>
            {GetStories()}
        </HorizontalScroll>
        </div>
    );
}

export default Stories;