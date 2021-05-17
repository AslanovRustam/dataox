import React, { useState } from 'react';
import s from './addPost.module.css';

export default function AddPost() {
  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');

  const handleChangeTitle = e => {
    setTitleInput(e.currentTarget.value);
  };
  const handleChangeBody = e => {
    setBodyInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    setTitleInput('');
    setBodyInput('');
  };

  return (
    <form className={s.formtStyle} onSubmit={handleSubmit}>
      <label>
        Title
        <input value={titleInput} onChange={handleChangeTitle}></input>
      </label>

      <label>
        Body
        <input value={bodyInput} onChange={handleChangeBody}></input>
      </label>
      <button type="submit" className={s.addButton}>
        Create
      </button>
    </form>
  );
}
