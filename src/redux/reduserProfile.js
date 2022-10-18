const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let init = {
    posts:[{id:1,message:"I am also fine, thx for u care",like:12},
            {id:2,message:"How are you?",like:123},
            {id:3,message:"No proplem bro",like:34},
            {id:3,message:"yo",like:1532},
            {id:3,message:"yo",like:154}
        ],
            newPostText:"I love my job"
};

const reduserProfile = (state = init,action) =>{
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