import React from "react";

export interface CommentData
{
  user:string,
  text:string,
  id:number;
}

export interface User
{
  id:number,
  name:string,
  username:string,
  imageLink:string;
}
export interface CardProps
{
  userID:number,
  storyBorder:boolean,
  image:string,
  comments:CommentData[],
  likedByText:String,
  likedByNumber:number,
  hours:number;
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