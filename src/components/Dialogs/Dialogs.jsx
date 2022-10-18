import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import h from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {



    let dialogs = props.state.dialogs.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} avatar = {dialog.avatar}/>);
    let messages = props.state.messages.map(message => <Message message = {message.message} avatar = {message.avatar}/>);
    let newMessageBody = props.state.newMessageText;



    let onUpadateMessageBody = (e) =>{
        let body = e.target.value;
        props.updateMessage(body);
    }

    let onSendMessageClick = () =>{
        props.sendMessage();
    }



    return(
       <div className={h.wrapper_dialogs}>
        <h1>Messages</h1>
            <div className={h.dialogs}>
                <div className={h.dialogsItem}>
                    {dialogs}
                </div>
                <div className={h.messages}>
                    {messages}
                </div>
            </div>
            <div className={h.wrapper_send}>
            <textarea onChange={onUpadateMessageBody} value={newMessageBody}></textarea>
            <button onClick={onSendMessageClick} className={h.button_messages}>Send</button> 
            </div>
       </div>
    )
}

export default Dialogs;