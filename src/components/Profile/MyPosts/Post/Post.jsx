
import React from 'react';
import styles from './Post.module.css';
const Post = (props) => {
    
    return (
        <div className={styles.item}>
            <img src='https://i.ytimg.com/vi/9SE17X3ysqw/maxresdefault.jpg'></img>
            {props.message}
            <div>
                <span>Like</span>
                {props.Likes}
            
            </div>

        </div>
    )



}



export default Post;