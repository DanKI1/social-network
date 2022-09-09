import React from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';

let PostData = [{id:1,message:"I am also fine, thx for u care",like:12},
    {id:2,message:"How are you?",like:123},
    {id:3,message:"No proplem bro",like:34},
    {id:3,message:"yo",like:1532},
    {id:3,message:"yo",like:154}
]

let posts = PostData.map(post => <Post countlike={post.like} message={post.message}/>)


const MyPost = () => {
    return(
      <div className={p.wrapper_mypost}>
        <div>
        <h3>My posts</h3>
        </div>
      <textarea></textarea>
      <button className={p.button_mypost}>Add</button>
      {posts}
     </div>
     
    )
}

export default MyPost;