import React from "react";
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
const Dialogs = (props) => {
   

    let dialogElements = props.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map((m) => <Message message={m.message} />)

    return (

        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogElements }
            </div>
            <div className={styles.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;