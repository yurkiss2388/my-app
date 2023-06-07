
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts =  [
        { id: 1, message: '1000-7', Likes: 12 },
        { id: 2, message: 'пофиг на игру', Likes: 666 },
        { id: 3, message: 'щас шмотки сломаю', Likes: 23 },
        { id: 4, message: 'ты в муте', Likes: 36 },
        { id: 5, message: 'go zxc если не позер', Likes: 777 },
    ]
    let postsElements = 
    posts.map(p => <Post message={p.message} Likes={p.Likes} />)
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