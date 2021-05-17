import React from 'react';
import s from './postList.module.css';
import { useState } from 'react';
import Modal from '../modal/modal';

export default function Post({ title, body }) {
  const [showModal, setShowmodal] = useState(false);

  const toggleModal = () => setShowmodal(!showModal);
  return (
    <>
      <div className={s.postCard}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      {showModal && <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />}
    </>
  );
}
