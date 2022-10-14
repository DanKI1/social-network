const UPDATE_MESSAGE_BODY = "UPDATE-MESSAGE-BODY";
const ADD_MESSAGE = "ADD-MESSAGE";

const reduserDialog = (state,action) =>{
switch(action.type){
    case UPDATE_MESSAGE_BODY:
        state.newMessageText = action.body;
        return state;
    case ADD_MESSAGE:
        let body = state.newMessageText;
        state.newMessageText="";
        state.messages.push({id:6,message:body,
        avatar:"https://i.pinimg.com/originals/71/65/3f/71653fdc6a335904edf1fa6a368981b6.jpg"});
        return state;
    default:return state;
    }
}

export const AddMessageCreator = () => ({type:ADD_MESSAGE});
export const UpdateMessageBodyCreator = (body) => ({type:UPDATE_MESSAGE_BODY,body:body});

export default reduserDialog;