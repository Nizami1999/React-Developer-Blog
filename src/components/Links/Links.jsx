import React from 'react';
import s from './Links.module.css';

const Links = () => {
  return (
    <ul className={s.ul}>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Category</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  )
}

export default Links;
