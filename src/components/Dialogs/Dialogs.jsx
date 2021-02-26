import React from 'react';
import s from './Dialogs.module.scss';

const Dialogs = () => {
  return (
    <div>
      <h1 className={s.title}>My chats</h1>
      <ul className={s.list}>
        <li className={s.listItem}><a href="#">Nizami ALimammadov</a></li>
        <li className={s.listItem}><a href="#">Farid Eyvazov</a></li>
        <li className={s.listItem}><a href="#">Habib Sadiqzade</a></li>
        <li className={s.listItem}><a href="#">Perviz Namazli</a></li>
      </ul>
    </div>
  )
}

export default Dialogs;
