import React from 'react';
import { AddMessageCreator, UpdateMessageBodyCreator } from '../../redux/reduserDialog';
import DialogItem from './DialogItem/DialogsItem';
import h from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
debugger;

    let state = props.store.getState().dialogsPage;

    let dialogs = state.dialogs.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} avatar = {dialog.avatar}/>);
    let messages = state.messages.map(message => <Message message = {message.message} avatar = {message.avatar}/>);
    let newMessageBody = state.newMessageText;



    let upadateMessageBody = (e) =>{
        let body = e.target.value;
        props.store.dispatch(UpdateMessageBodyCreator(body));
    }

    let onSendMessageClick = () =>{
        props.store.dispatch(AddMessageCreator());
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
            <textarea onChange={upadateMessageBody} value={newMessageBody}></textarea>
            <button onClick={onSendMessageClick} className={h.button_messages}>Send</button> 
            </div>
       </div>
    )
}

export default Dialogs;