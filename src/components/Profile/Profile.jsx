import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import s from './Profile.module.css';

const Profile = () => {
  return ( <div className={s.profile}>
      <ProfileInfo/>
      <div>
        ava + description
      </div>
     <MyPosts/>
      </div>
    )
}


export default Profile;