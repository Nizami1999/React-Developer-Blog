import React from 'react';
import s from './Post.module.css'
import photo from '../../User/Nizami.jpg';


const Post = (props) => {
    return (
        <div className={s.post}>
            <hr />
            <img className={s.userImage} src={photo} alt="img" />
            <span className={s.userName}>Nizami Alimamedov <span className={s.innerText}>React Developer Blog</span></span>
            <form>
                <textarea className={s.textarea} name="post" readOnly value={props.message}></textarea>
            </form>
            <h4 className={s.likes}>Likes: <span>{props.likes}</span></h4>

        </div>
    )
}


export default Post;