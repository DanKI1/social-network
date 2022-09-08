import React from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';

let PostData = [{id:1,message:"I am also fine, thx for u care",like:12},
    {id:2,message:"How are you?",like:123},
    {id:3,message:"No proplem bro",like:34},
    {id:3,message:"yo",like:1532},
    {id:3,message:"yo",like:154}
]


const MyPost = () => {
    return(
      <div className={p.wrapper_mypost}>
        <div>
        <h3>My posts</h3>
        </div>
      <textarea></textarea>
      <button className={p.button_mypost}>Add</button>
      <Post countlike={PostData[0].like} message={PostData[0].message}/>
      <Post countlike={PostData[1].like} message={PostData[1].message}/>
     </div>
     
    )
}

export default MyPost;