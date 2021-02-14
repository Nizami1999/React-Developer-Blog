import s from './EnterPost.module.css';

const EnterPost = () => {
    return (
        <div>
            <h1>React Developer Blog</h1>
            <p className={s.lorem1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dignissimos quis optio repellendus
            laboriosam harum, labore rem, culpa ab voluptas assumenda esse! Corporis, unde fugiat.</p>
            <form>
                <textarea className={s.textarea} name="post" placeholder="Type some post..." ></textarea>
                <button className={s.btn} >Add</button>
                <button type="reset" className={s.btn} >Reset</button>
            </form>
        </div>
    )
}

export default EnterPost;
