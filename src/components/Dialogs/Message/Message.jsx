import React from 'react';
import h from './../Dialogs.module.css';


const Message = (props) =>{
    return <div className={h.message}>
        <img src={props.avatar} alt=""/>
        <span>
        {props.message}
        </span>
        
        
        </div>
}

export default Message;