import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return(
    <div className={p.wrapper_post}>
    <img className={p.avatar} src = "https://thypix.com/wp-content/uploads/2021/10/grey-anime-profile-picture-thypix-114-700x700.jpg" alt=''/>
        <span className={p.post_m}>{props.message}</span>
      <div className={p.like}>
       <img className={p.img_like} src='https://purepng.com/public/uploads/large/flat-design-like-qcn.png' alt=''/>{props.countlike}
      </div>
    </div>  
    )
}

export default Post;