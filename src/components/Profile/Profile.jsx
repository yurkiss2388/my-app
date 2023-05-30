
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
const Profile = () => {
    return (
        <div>
            
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hazgLb0mA30SqlKhlb06Lsa1Tq8xcFhuElXyog5Ypi7tIyr6kufpZn7xhZUbh6ci5t0&usqp=CAU' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
}
export default Profile;