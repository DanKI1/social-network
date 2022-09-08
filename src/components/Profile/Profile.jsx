import React from 'react';
import MyPost from './MyPosts/MyPost';
import ps from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return(
      <div className={ps.content}>
      <ProfileInfo/>
      <MyPost/>
      </div>
    )
}

export default Profile;