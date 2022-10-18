import React from 'react';
import { AddPostActionCreator, UpdatePostTextActionCreator } from '../../../redux/reduserProfile';
import MyPost from './MyPost';


const MyPostContainer = (props) => {
debugger;
  let state = props.store.getState().profilePage.posts;

  let addPosts = () => {
    props.store.dispatch(AddPostActionCreator());
  }

  let changePost = (text) =>{
    props.store.dispatch(UpdatePostTextActionCreator(text));
  }

    return <MyPost addPosts = {addPosts} changePost = {changePost} postData = {state}/>;
    
}

export default MyPostContainer;