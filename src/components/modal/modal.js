import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import * as operations from '../redux/operations';
import s from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, post }) {
  const [title, setTitleInput] = useState(post.title);
  const [body, setBodyInput] = useState(post.body);

  const dispatch = useDispatch();

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleChangeTitle = e => {
    setTitleInput(e.currentTarget.value);
  };

  const handleChangeBody = e => {
    setBodyInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log();
  };

  const editPost = e => {
    dispatch(operations.editPost({ title, body }, post.id));
    onClose();
  };

  return createPortal(
    <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
      <form className={s.formtStyle} onSubmit={handleSubmit}>
        <label className={s.labelModalStyle}>
          Title
          <input className={s.inputModalStyle} value={title} onChange={handleChangeTitle}></input>
        </label>

        <label className={s.labelModalStyle}>
          Body
          <input className={s.inputModalStyle} value={body} onChange={handleChangeBody}></input>
        </label>
        <button type="submit" className={s.addButton} onClick={() => editPost()}>
          Update
        </button>
      </form>
    </div>,
    modalRoot,
  );
}
