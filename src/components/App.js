import React, { Component } from 'react';
import { useState } from 'react';
import PostList from './post/postList';
import FilterSection from './filter/filter';
import AddSection from './addPost/addPost';
import Modal from './modal/modal';
// import '../styles/App.css';

function App() {
  // function onSubmitHandler(data) {
  //   console.log(data);
  // }

  const [showModal, setShowmodal] = useState(false);

  const toggleModal = () => setShowmodal(!showModal);

  return (
    <>
      {/* <FilterSection onSubmit={onSubmitHandler} /> */}
      <FilterSection />

      <AddSection />
      <PostList />

      {/* <PostList onSubmit={addPostToPostList} /> */}
      {showModal && <Modal onClose={toggleModal} />}
    </>
  );
}

export default App;
