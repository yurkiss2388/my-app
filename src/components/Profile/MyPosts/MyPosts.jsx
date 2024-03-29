
import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} Likes={p.Likes} />)
    let newPostElement = React.createRef();  

    let addpost = () => {
        props.addPost();
        
        
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        
    }
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                New post
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} 
                            value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addpost}> Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>

    )
}



export default MyPosts;