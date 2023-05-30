
import React from 'react';
import styles from './Post.module.css';
const Post = (props) => {
    
    return (
        <div className={styles.item}>
            <img src='https://demotivation.ru/wp-content/uploads/2020/11/risunok-art-devushka-lico-ochki-scaled.jpg'></img>
            {props.message}
            <div>
                <span>like</span>
                {props.Likes}
            
            </div>

        </div>
    )



}



export default Post;