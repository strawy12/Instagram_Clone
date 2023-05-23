import React, {useState, useEffect} from 'react';
import "../styles/cards.scss";
import Stories from "./Stories"; 
import Card from "./Card";
import{ CardData }from "../data/Define";
import Axios, {AxiosResponse} from 'axios';



function Cards():JSX.Element
{
    function GetCards(cnt:number):JSX.Element[] 
    {
        let [cards, setCards] = useState<CardData[]>();
        useEffect(() => 
        {
            Axios.get('http://localhost:3001/getRandomCards/',{params:cnt}).then((res:AxiosResponse) => 
            {
                setCards(res.data);
            });
        });

        let result:JSX.Element[] = [];
        
        if(cards != null && cards.length != 0)
        {
            for(let i = 0; i < cnt; i++)
            {
                result.push(
                    <Card 
                    id={cards[i].id}
                    userID={cards[i].userID}
                    likedUserID={cards[i].likedUserID}
                    imageName={cards[i].imageName}
                    text={cards[i].text}
                    commentID={cards[i].commentID}
                    time={cards[i].time}
                    />
                )
            }
        }

        return result;
    }

    return (
        <div className="cards">
            <Stories />
            {GetCards(1)}
        </div>
    );
}

export default Cards;