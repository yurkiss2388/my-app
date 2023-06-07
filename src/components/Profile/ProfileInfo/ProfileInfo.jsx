
import React from 'react';
import styles from './ProfileInfo.module.css';
const ProfileInfo = () => {
    return (

        <div>
            <div>
                <img src='https://i.ytimg.com/vi/WwotjYw8ITM/maxresdefault.jpg?7857057827' className={styles.imgProfileInfo} />
            </div>
            
            <div className={styles.descriptionBlock}>
                ava + descriptiontion
            </div>


        </div>

    )
}
export default ProfileInfo;