import React from 'react';
import PostList from './post/postList';
import FilterSection from './filter/filter';
import AddSection from './addPost/addPost';

function App() {
  return (
    <>
      <FilterSection />
      <AddSection />
      <PostList />
    </>
  );
}

export default App;
