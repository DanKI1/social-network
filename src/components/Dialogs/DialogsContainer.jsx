import React from 'react';
import { AddMessageCreator, UpdateMessageBodyCreator } from '../../redux/reduserDialog';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let updateMessage = (body) =>{
        props.store.dispatch(UpdateMessageBodyCreator(body));
    }

    let sendMessage = () =>{
        props.store.dispatch(AddMessageCreator());
    }



    return <Dialogs sendMessage = {sendMessage} updateMessage = {updateMessage} state = {state}/>
}

export default DialogsContainer;