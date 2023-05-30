
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post message='what?' Likes='12' />
                <Post message='WTF?'  Likes='666' />
            </div>
        </div>

    )
}



export default MyPosts;