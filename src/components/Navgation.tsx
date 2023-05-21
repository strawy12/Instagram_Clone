
import React from 'react';
import "../styles/navigations.scss"
import logo from "../images/InstagramLogo.png";
import SearchIcon from "../images/SearchIcon.png";
import Menu from "./Menu";

function SearchPenel():JSX.Element
{
    return (
        <div className="search">
                <img className="searchIcon" src={SearchIcon} alt="search icon"/>
                <span className="searchText">Search</span>
        </div>
    );
}

function Navigation():JSX.Element
{
    return(
    <div className="navigation">
        <div className="container">
            <img className="logo" src={logo} alt="instagram logo"/>
            <SearchPenel/>
        <Menu/> 
        </div>
    </div>
        )

}

export default Navigation;