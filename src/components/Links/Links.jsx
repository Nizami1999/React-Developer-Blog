import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Links.module.scss';

const Links = () => {
  return (
    <ul className={s.ul}>
      <li><NavLink to="/home" activeClassName={s.active}>Home</NavLink></li>
      <li><NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></li>
      <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
      <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
      <li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
    </ul>
  )
}

export default Links;
