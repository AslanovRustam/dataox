import { createAction } from '@reduxjs/toolkit';

const fetchPostRequest = createAction('fetchPostRequest');
const fetchPostSuccess = createAction('fetchPostSuccess');
const fetchPostError = createAction('fetchPostError');

const deletePostsRequest = createAction('deletePostsRequest');
const deletePostsSuccess = createAction('deletePostsSuccess');
const deletePostsError = createAction('deletePostsError');

const filterItem = createAction('filter');

export default {
  filterItem,
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostError,
  deletePostsRequest,
  deletePostsSuccess,
  deletePostsError,
};
