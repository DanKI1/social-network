import React from 'react';
import MyPost from './MyPosts/MyPost';
import ps from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
      <div className={ps.content}>
      <ProfileInfo/>
      <MyPost post_datas = {props.post_datas}/>
      </div>
    )
}

export default Profile;