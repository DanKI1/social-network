const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const UPDATE_MESSAGE_BODY = "UPDATE-MESSAGE-BODY";
const ADD_MESSAGE = "ADD-MESSAGE";
debugger;
let store = {
    _state: {
        profilePage:{
            posts:[{id:1,message:"I am also fine, thx for u care",like:12},
            {id:2,message:"How are you?",like:123},
            {id:3,message:"No proplem bro",like:34},
            {id:3,message:"yo",like:1532},
            {id:3,message:"yo",like:154}
        ],
            newPostText:"I love my job"
        },
        dialogsPage:{
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
        newMessageText:""
        },
        sidebarFriends:[{id:1,name:"Andrey",avatar:"https://anime-fans.ru/wp-content/uploads/2021/01/Ochen-smeshnye-anime-avy_05.jpg"},
        {id:2,name:"Mathfey",avatar:"https://aniyuki.com/wp-content/uploads/2021/06/aniyuki-funny-anime-avatars-74.jpg"},
        {id:3,name:"Erik",avatar:"https://anime-fans.ru/wp-content/uploads/2021/03/Topovyj-anime-art-na-avu-devushki-sborki-kartinok-3.jpg"}
    ]
    },
     _callSubscriber() {
        console.log("hello");
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },
    dispatch(action){
        if(action.type ==='ADD-POST'){
            let newPost = {
                id:5,
                message:this._state.profilePage.newPostText,
                like:0
            };
            this._state.profilePage.newPostText = "";
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
        }else if(action.type ==='UPDATE-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === "UPDATE-MESSAGE-BODY"){
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber(this._state);
        }else if(action.type ==='ADD-MESSAGE'){
            let body = this._state.dialogsPage.newMessageText;
            this._state.dialogsPage.newMessageText="";
            this._state.dialogsPage.messages.push({id:6,message:body,
                avatar:"https://i.pinimg.com/originals/71/65/3f/71653fdc6a335904edf1fa6a368981b6.jpg"});
            this._callSubscriber(this._state);

        }
    }
}

export const AddPostActionCreator = () => ({type:ADD_POST});
export const UpdatePostTextActionCreator = (text) => ({type:UPDATE_POST_TEXT,newText:text});

export const AddMessageCreator = () => ({type:ADD_MESSAGE});
export const UpdateMessageBodyCreator = (body) => ({type:UPDATE_MESSAGE_BODY,body:body});

export default store;