import React from 'react';
import h from './../Dialogs.module.css';

const Message = (props) =>{
    return <div className={h.message}>{props.message}</div>
}

export default Message;