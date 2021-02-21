import MyPosts from './MyPosts/MyPosts';
import User from './User/User';
import s from './Profile.module.scss';

const Profile = () => {
  return (
    <div className={s.container, s.grid}>
      <User/>
      <MyPosts/>
    </div>
  )
}

export default Profile;
