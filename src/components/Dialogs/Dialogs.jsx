import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import h from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {

    let dialogs = props.dialog_datas.map(dialog => <DialogItem name = {dialog.name} id = {dialog.id}/>);

    let messages = props.message_datas.map(message => <Message message = {message.message}/>);

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