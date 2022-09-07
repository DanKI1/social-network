import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return(
    <div>
    <img className={p.avatar} src = "https://thypix.com/wp-content/uploads/2021/10/grey-anime-profile-picture-thypix-114-700x700.jpg" alt=''/>
        {props.message}
      <div>
        like {props.countlike}
      </div>
    </div>  
    )
}

export default Post;