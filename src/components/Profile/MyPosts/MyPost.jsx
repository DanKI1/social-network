import React from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = (props) => {

  let posts = props.postData.map(post => <Post key={post.like} countlike={post.like} message={post.message}/>)

  let postdata = React.createRef();

  let onAddPosts = () => {
    props.addPosts();
  }

  let onChangePost = () =>{
    let text = postdata.current.value;
    props.changePost(text);
  }

    return(
      <div className={p.wrapper_mypost}>
        <div>
        <h3>My posts</h3>
        </div>
      <textarea onChange={onChangePost} ref={postdata} value = {props.newPostText}></textarea>
      <button onClick={onAddPosts} className={p.button_mypost}>Add</button>
      {posts}
     </div>
     
    )
}

export default MyPost;