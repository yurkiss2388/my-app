import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message = (props) => {
    return <div className={styles.dialog}>{props.message}</div>

}
const Dialogs = (props) => {
    let dialogs = [
        { id: 1, name: 'Yuron' },
        { id: 2, name: 'Bro' },
        { id: 3, name: 'Lera' },
        { id: 4, name: 'Kamilka' },
        { id: 5, name: 'Sister' },
        { id: 6, name: 'Philip' },
    ]
    let messages = [
        { id: 1, message: 'What is love' },
        { id: 2, message: 'Baby dont heart me' },
        { id: 3, message: 'don heart me' },
        { id: 4, message: 'no mo' },
        { id: 5, message: 'WHAT IS LOOOVE' },
        { id: 6, message: 'BABY DOMT HEART ME' },
    ]

    let dialogElements = dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map((m) => <Message message={m.message} />)

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