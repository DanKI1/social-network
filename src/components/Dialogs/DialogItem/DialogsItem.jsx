import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './../Dialogs.module.css';

const DialogItem = (props) =>{
    return <div className={h.dialog}>
        <img src={props.avatar} alt = ""/>
        <NavLink className={h.name_dialogItem} to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
}

export default DialogItem;