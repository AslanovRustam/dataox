import React from 'react';
import s from './postList.module.css';

export default function Post({ title, body, email, name }) {
  return (
    <>
      <div className={s.postCard}>
        <h2>{title}</h2>
        {name && <h3>{name}</h3>}
        {email && <h4>{email}</h4>}
        <p>{body}</p>
      </div>
    </>
  );
}
