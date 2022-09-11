import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import h from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id} avatar = {dialog.avatar}/>);

    let messages = props.state.messages.map(message => <Message message = {message.message}/>);

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