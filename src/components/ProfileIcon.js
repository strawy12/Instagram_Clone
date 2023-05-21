import "../styles/profileIcon.scss";

function ProfileIcon(prop)
{
    const {iconSize, storyBorder, image, user } = prop;       

    function getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let profileImage;

    if(!image && user)
    {
        const {id, name, username, imageType} = user;
        profileImage = `https://raw.githubusercontent.com/strawy12/Instagram_Clone/main/src/images/ProfileImages/${username}.${imageType}`;
    }

    else if(image)
    {
        profileImage = image;
    }

    return (
        <div className={storyBorder? "storyBorder" : ""}>
           <img 
           className={`profileIcon ${iconSize}`} 
           src={profileImage}
           alt="profile"/> 
        </div>
    );
}

export default ProfileIcon;