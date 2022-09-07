import React from 'react';
import h from './Dialogs.module.css';

const Dialogs = () => {
    return(
       <div>
        <h1>Messages</h1>
            <div className={h.dialogs}>
                <div className={h.dialogsItem}>
                    <div className={h.dialog}>Mam</div>
                    <div className={h.dialog}>Dad</div>
                    <div className={h.dialog}>Efrem</div>
                    <div className={h.dialog}>Ravil</div>
                    <div className={h.dialog}>Mathey</div>
                </div>
                <div className={h.messages}>
                    <div className={h.message}>Hi</div>
                    <div className={h.message}>How are you?</div>
                    <div className={h.message}>Oh I'm okey</div>
                </div>
            </div>
       </div>
    )
}

export default Dialogs;