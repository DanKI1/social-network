import React from 'react';
import p from './MyPost.module.css';
import Post from './Post/Post';



const MyPost = (props) => {

  let posts = props.post_datas.map(post => <Post key={post.like} countlike={post.like} message={post.message}/>)

  let postData = React.createRef();

  let addPosts = () => {
    props.dispatch({type:'ADD-POST'});
  }

  let onChangePost = () =>{
    let text = postData.current.value;
  props.dispatch({type:'UPDATE-POST-TEXT',newText:text});
  }

    return(
      <div className={p.wrapper_mypost}>
        <div>
        <h3>My posts</h3>
        </div>
      <textarea onChange={onChangePost} ref={postData} value = {props.newPostText}></textarea>
      <button onClick={addPosts} className={p.button_mypost}>Add</button>
      {posts}
     </div>
     
    )
}

export default MyPost;