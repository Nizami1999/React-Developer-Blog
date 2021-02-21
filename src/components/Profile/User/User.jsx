import s from './User.module.scss';
import photo from './Nizami.jpg';

const User = () => {
    return (
        <div>
            <h1>Profile</h1>
            <h2>Name: <span>Nizami</span></h2>
            <h2>Surname: <span>Alimamedov</span></h2>
            <img className={s.photo} src={photo} alt="photo" />
        </div>
    )
}

export default User;
