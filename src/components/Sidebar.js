import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import ProfileIcon from "./ProfileIcon";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/Chaewon.jpg";

function Sidebar(){
    return (
        <div className="sidebar">
            <Sticky topOffset={-80}>
                <div className="sidebar">
                    <Profile 
                    username="_chaechae_1" 
                    caption="Kim Chaewon" 
                    urlText="Switch" 
                    conSize="big" 
                    image = {image} 
                    />
                    <Suggestions />
                    <Footer />
                </div>
            </Sticky>


        </div>
    );
}

export default Sidebar;