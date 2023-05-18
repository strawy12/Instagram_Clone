
import "../styles/navigations.scss"
import logo from "../images/InstagramLogo.png";
import searchIcon from "../images/SearchIcon.png";
import Menu from "./Menu.js";

function Navigation()
{
    return(
    <div className="navigation">
        <div className="container">
            <img className="logo" src={logo} alt="instagram logo"/>
            <div className="search">
                <img className="searchIcon" src={searchIcon} alt="search icon"/>
                <span className="searchText">Search</span>
            </div>
        <Menu/> 
        </div>
    </div>
        )

}

export default Navigation;