import React from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return(
      <div className={p.wrapper_mypost}>
        <div>
        <h3>My posts</h3>
        </div>
      <textarea></textarea>
      <button className={p.button_mypost}>Add</button>
      <Post countlike="22" message='Hello how are you?'/>
      <Post countlike="12" message='Hello i am fine, and u?'/>
      <Post countlike="454" message='I am also fine, thx for u care'/>
      <Post countlike="13" message='No proplem bro'/>
     </div>
     
    )
}

export default MyPost;