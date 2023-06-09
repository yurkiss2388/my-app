
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
   
    let postsElements = 
    props.posts.map(p => <Post message={p.message} Likes={p.Likes} />)
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                New post
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
            {postsElements}
            </div>
        </div>

    )
}



export default MyPosts;