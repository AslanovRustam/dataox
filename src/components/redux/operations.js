import React from 'react';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllPosts, fetchdeletePost } from '../../fetch/fetch';
import actions from './actions';

export const fetchPosts = () => async dispatch => {
  dispatch(actions.fetchPostRequest());
  try {
    const posts = await fetchAllPosts();
    dispatch(actions.fetchPostSuccess(posts));
  } catch (error) {
    dispatch(actions.fetchPostError(error));
  }
};

export const deletePosts = id => async dispatch => {
  dispatch(actions.deletePostsRequest());
  try {
    const posts = await fetchdeletePost(id);
    dispatch(actions.deletePostsSuccess(posts));
  } catch (error) {
    dispatch(actions.deletePostsError(error));
  }
};

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
//   try {
//     const books = await bookShelfAPI.fetchBooks();
//     return books;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });
// export default fetchPosts;
