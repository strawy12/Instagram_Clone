import React from "react";

export interface CommentData
{
  id:number
  userID:number
  text:string
  likeUserID:number[]
  replyCommentID:number[]
}

export interface User
{
  idx:number
  userID:string
  name:string
  imageLink:string
  storyBorder:boolean
  password:string
}
export interface CardData
{
  id:number
  userID:number
  likedUserID:number[]
  imageName:string
  text:string
  commentID:number[]
  time:number
}

export interface ProfileIconProps
{
  iconSize:string,
  storyBorder:boolean,
  image:string
}


export interface ProfileProps
{
  userID:number,
  caption:string,
  urlText:string,
  iconSize:string,
  captionSize:string,
  storyBorder:boolean,
  hideAccountName:boolean
}

export interface MenuProps
{
   style:JSX.Element,
   text:string
}

export interface LikedByProps
{
    likeByUserID:number[]
}

export function NumberUnitConversion(value:number):string
{
  let moneyUnits:string[] = ["","만","억","조","경"];
  let moneyList:number[] = [];
  let place:number = Math.floor(Math.pow(10, 4));
  let result:string = "";

  if(value == 0) return "0명";

  while (value > 0)
  { 
    moneyList.push(Math.floor(value % place)); 
    value =  Math.floor(value /place); 
  }

  let idx = Math.max(0, moneyList.length - 2);

  if(idx == 0)
  {
    result = moneyList[0].toString() ;
  }

  else
  {
    result = moneyList[idx].toString() + "." + moneyList[idx-1].toString()[0] +moneyUnits[idx];
  }

  return result;
}
