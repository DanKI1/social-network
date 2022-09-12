import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import h from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
    let messageData = React.createRef();

    let sendNewMessage =()=> {
        alert(messageData.current.value);
    }

    let dialogs = props.state.dialogs.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} avatar = {dialog.avatar}/>);

    let messages = props.state.messages.map(message => <Message message = {message.message} avatar = {message.avatar}/>);

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
            <textarea ref={messageData}></textarea>
            <button onClick={sendNewMessage} className={h.button_messages}>Send</button> 
            </div>
       </div>
    )
}

export default Dialogs;