import React from 'react';
import MyPost from './MyPosts/MyPost';
import ps from './Profile.module.css';

const Profile = () => {
    return(
      <section className={ps.content}>
      <img className={ps.mainimg} src='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/06/best-anime-spring-2022-season-featured-image.jpg' alt=''/>
      <MyPost/>
    </section>
    )
}

export default Profile;