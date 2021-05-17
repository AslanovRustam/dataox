import React, { Component } from 'react';
import PostList from './post/postList';
import FilterSection from './filter/filter';
import AddSection from './addPost/addPost';
// import '../styles/App.css';

function App() {
  function onSubmitHandler(data) {
    console.log(data);
  }
  function addPostToPostList({ title, body }) {
    console.log(body, title);
  }

  return (
    <>
      <FilterSection onSubmit={onSubmitHandler} />
      <AddSection />
      <PostList onSubmit={addPostToPostList} />
    </>
  );
}

export default App;
