import React from 'react';
import './Profile.css';
const Profile = () => {
    return <div className='profile'>
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hazgLb0mA30SqlKhlb06Lsa1Tq8xcFhuElXyog5Ypi7tIyr6kufpZn7xhZUbh6ci5t0&usqp=CAU' />
        </div>
        
        <div className='item'>
            ava + description
        </div>
        <div className='item'>
            my posts
            <div className='item'>
                New post
            </div>
            <div className='item'>
                post1
            </div >
            <div className='item'>
                post2
            </div>
        </div>

    </div>

}
export default Profile;