import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
return <div className={styles.dialog + ' '+ styles.active }>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}
const Message = (props) =>{
return <div className={styles.dialog}>{props.message}</div>

}
const Dialogs = (props) => {
    return (
        
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="Yuron" id="1" />
                <DialogItem name="Bro" id="2" />
                <DialogItem name="Lera" id="3" />
                <DialogItem name="Kamilka" id="4" />
                <DialogItem name="Sister" id="5" />
                <DialogItem name="Philip" id="6" />
            </div>
            <div className={styles.messages}>
                <Message message="What is love"/>
                <Message message="Baby dont heart me"/>
                <Message message="don heart me"/>
                <Message message="no mo"/>
            </div>
        </div>



    )
}

export default Dialogs;