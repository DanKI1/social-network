import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Dialogs.module.css';

const DialogItem = (props) =>{
    return <div className={h.dialog}>
        <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
}

const Message = (props) =>{
    return <div className={h.message}>{props.message}</div>
}

let DialogData = [{id:1,name:"Mam"},
    {id:2,name:"Ravil"},
    {id:3,name:"Efrem"},
    {id:4,name:"Erik"},
    {id:5,name:"Lena"},
]

let MessagesData = [{id:1,message:"Hi"},
    {id:2,message:"How are you?"},
    {id:3,message:"Oh I'm okey"},
    {id:3,message:"yo"},
    {id:3,message:"yo"}
]



let dialogs = DialogData.map(dialog => <DialogItem name = {dialog.name}/>);

let messages = MessagesData.map(message => <Message message = {message.message}/>);


const Dialogs = () => {
    return(
       <div>
        <h1>Messages</h1>
            <div className={h.dialogs}>
                <div className={h.dialogsItem}>
                    {dialogs}
                </div>
                <div className={h.messages}>
                    {messages}
                </div>
            </div>
       </div>
    )
}

export default Dialogs;