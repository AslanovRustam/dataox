import React from 'react';
import s from './postList.module.css';

export default function Post({ title, body }) {
  return (
    <div className={s.postCard}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
