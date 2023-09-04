import React from 'react';
import "../styles/suggestions.scss";
import Profile from "./Profile";
import DB from "../data/DB";
import {User}from "../data/Define";

function Suggestions():JSX.Element
{
    function GetProfiles():JSX.Element[]
    {
        let users:User[] = DB.Inst.RandomUserList();
        let captions:string[] = ["회원님을 팔로우합니다", `oif_6842님, seor_.n 외 ${Math.floor(Math.random() * 1000)}명이 팔로우합니다`];
        let profiles:JSX.Element[] = [];
        for(let i = 0; i < 5; i++)
        {
            profiles.push(
                <Profile
                    userID={users[i].id}
                    caption={captions[Math.floor(Math.random() * 2)]}
                    urlText="팔로우"
                    iconSize="medium"
                    captionSize="small"
                    storyBorder={Math.floor(Math.random() * 2) == 0}
                    hideAccountName={false}
                />
            );
        }

        return profiles;
    }

    return (
    <div className="suggestions">
        <div className="titleContainer">
            <div className="title">회원님을 위한 추천</div>
            <a href="/">모두 보기</a>
        </div>
        
        { GetProfiles() }
        
    </div>
    );
}

export default Suggestions;