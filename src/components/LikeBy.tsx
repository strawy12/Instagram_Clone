import React from 'react';
import "../styles/likeBy.scss";
import Profile from './Profile';
import {LikedByProps,NumberUnitConversion, User } from '../data/Define';


function LikeBy(prop:LikedByProps):JSX.Element
{
    let { likeByUserID } = prop;
    
    return (
        <div className="likedBy">
            {true ? 
                <Profile 
                    userID={0} 
                    iconSize="small" 
                    storyBorder={true} 
                    captionSize=''
                    caption=''
                    urlText=''
                    hideAccountName={true}
                />
                
            :
            ""
            }
            {
                false ? 
                <span>
                    님 <strong>외 {NumberUnitConversion(likeByUserID.length)}명</strong>이 좋아합니다
                </span>
                :
                <span>
                    <strong>좋아요 {NumberUnitConversion(likeByUserID.length)}개</strong> 
                </span>
            }

        </div>
    );
}

export default LikeBy;