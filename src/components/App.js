import React, { Component } from 'react';
import PostList from './post/postList';
import FilterSection from './filter/filter';
// import '../styles/App.css';

function App() {
  return (
    <>
      <FilterSection />
      <PostList />
    </>
  );
}

export default App;
