import React from 'react';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllPosts,
  fetchdeletePost,
  addPost,
  updPost,
  filterPost,
  fetchCommentsToPost,
} from '../../fetch/fetch';
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

export const deletePost = id => async dispatch => {
  dispatch(actions.deletePostRequest());
  try {
    await fetchdeletePost(id);
    dispatch(actions.deletePostSuccess(id));
  } catch (error) {
    dispatch(actions.deletePostError(error));
  }
};

export const createPost = post => async dispatch => {
  dispatch(actions.addPostRequest());
  try {
    const newPost = await addPost(post);
    dispatch(actions.addPostSuccess(newPost));
  } catch (error) {
    dispatch(actions.addPostError(error));
  }
};

export const editPost = (post, id) => async dispatch => {
  dispatch(actions.updPostRequest());
  try {
    const newPost = await updPost(post, id);
    dispatch(actions.updPostSuccess(newPost));
  } catch (error) {
    dispatch(actions.updPostError(error));
  }
};

export const findPost = id => async dispatch => {
  dispatch(actions.filterRequest());
  try {
    const newId = await filterPost(id);
    dispatch(actions.filterSuccess(newId));
  } catch (error) {
    dispatch(actions.filterError(error));
  }
};

export const postWithComents = id => async dispatch => {
  dispatch(actions.comentToPostRequest());
  try {
    const newId = await fetchCommentsToPost(id);
    dispatch(actions.comentToPostSuccess(newId));
  } catch (error) {
    dispatch(actions.comentToPostError(error));
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
