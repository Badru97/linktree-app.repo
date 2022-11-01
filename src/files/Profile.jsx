import React from "react"
import Profile_img from "../images/image-jeremy.png"
import "./Profile.css"

const Profile =() =>{
  return(
    <div>
    <img src={Profile_img} alt='profile_img' id ="profile_img" className="profileImg"/>
    <p id="twitter">Lukman Badru</p>
    <p id="slack">Badru</p>
    </div>
  )
}

export default Profile;