
import React from 'react';
import styles from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (

        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hazgLb0mA30SqlKhlb06Lsa1Tq8xcFhuElXyog5Ypi7tIyr6kufpZn7xhZUbh6ci5t0&usqp=CAU' />
            </div>
            
            <div className={styles.descriptionBlock}>
                ava + descriptiontion
            </div>


        </div>

    )
}
export default ProfileInfo;