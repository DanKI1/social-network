import React from 'react';
import MyPostContainer from './MyPosts/MyPostContainer';
import ps from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return(
      
      <div className={ps.content}>
      <ProfileInfo/>
      <MyPostContainer store = {props.store} />
      </div>
    )
}

export default Profile;