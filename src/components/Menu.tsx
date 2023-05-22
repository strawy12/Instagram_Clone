import React from 'react';
import "../styles/menu.scss";
import { MenuProps } from '../data/Define';

function Menu(prop:MenuProps): JSX.Element
{
    const { style, text } = prop;

    return(
    <div className="menu">
        <span className="icon">{style}</span>
        <span className="text">{text}</span>
    </div> 
    );
}

export default Menu;