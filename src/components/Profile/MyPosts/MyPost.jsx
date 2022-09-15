import React from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';



const MyPost = (props) => {


  let posts = props.post_datas.map(post => <Post countlike={post.like} message={post.message}/>)

  let postData = React.createRef();

  let addPosts = () => {
    props.addPost(postData.current.value);
  }

    return(
      <div className={p.wrapper_mypost}>
        <div>
        <h3>My posts</h3>
        </div>
      <textarea ref={postData}></textarea>
      <button onClick={addPosts} className={p.button_mypost}>Add</button>
      {posts}
     </div>
     
    )
}

export default MyPost;