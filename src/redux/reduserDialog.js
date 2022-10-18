const UPDATE_MESSAGE_BODY = "UPDATE-MESSAGE-BODY";
const ADD_MESSAGE = "ADD-MESSAGE";

let init = {
    dialogs:[{id:1,name:"Mam",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbA8SCLvl1WXaZ8MVqGAYLC4UzRopT98CReSM0rtNWXAI_Y3robgvG0KW_wKZgSQ2oFZg&usqp=CAU"},
        {id:2,name:"Ravil",avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdxh59NdcM8E_LbkXulSfgGBDbY64cVhp_4w&usqp=CAU"},
        {id:3,name:"Efrem",avatar:"https://i.pinimg.com/564x/90/46/9f/90469ffe7de5d4a82225b24df0203c91.jpg"},
        {id:4,name:"Erik",avatar:"https://anime-fans.ru/wp-content/uploads/2021/03/Topovyj-anime-art-na-avu-devushki-sborki-kartinok-3.jpg"},
        {id:5,name:"Lena",avatar:"https://i.pinimg.com/originals/71/65/3f/71653fdc6a335904edf1fa6a368981b6.jpg"},
    ],
    messages:[{id:1,message:"Hi",avatar:"https://i.pinimg.com/originals/71/65/3f/71653fdc6a335904edf1fa6a368981b6.jpg"},
    {id:2,message:"How are you?",avatar:"https://i.pinimg.com/originals/71/65/3f/71653fdc6a335904edf1fa6a368981b6.jpg"},
    {id:3,message:"Oh I'm okey",avatar:"https://i.pinimg.com/originals/71/65/3f/71653fdc6a335904edf1fa6a368981b6.jpg"},
    {id:3,message:"yo",avatar:"https://i.pinimg.com/originals/71/65/3f/71653fdc6a335904edf1fa6a368981b6.jpg"},
    {id:3,message:"yo",avatar:"https://i.pinimg.com/originals/71/65/3f/71653fdc6a335904edf1fa6a368981b6.jpg"}
],
    newMessageText:"I love read"
}
debugger;
const reduserDialog = (state=init,action) =>{
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