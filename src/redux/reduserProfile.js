const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const reduserProfile = (state,action) =>{
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id:5,
                message:state.newPostText,
                like:0
            };
            state.newPostText = "";
            state.posts.push(newPost);
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({type:ADD_POST});
export const UpdatePostTextActionCreator = (text) => ({type:UPDATE_POST_TEXT,newText:text});

export default reduserProfile;