import React from 'react';
import PostList from './post/postList';
import FilterSection from './filter/filter';
import AddSection from './addPost/addPost';
// import Pagination from './pagination/pagination';

function App() {
  // function onSubmitHandler(data) {
  //   console.log(data);
  // }

  return (
    <>
      {/* <FilterSection onSubmit={onSubmitHandler} /> */}
      {/* <PostList onSubmit={addPostToPostList} /> */}

      <FilterSection />
      <AddSection />
      <PostList />
      {/* <Pagination /> */}
    </>
  );
}

export default App;
