import { createAction } from '@reduxjs/toolkit';

const fetchPostRequest = createAction('fetchPostRequest');
const fetchPostSuccess = createAction('fetchPostSuccess');
const fetchPostError = createAction('fetchPostError');

const deletePostRequest = createAction('deletePostRequest');
const deletePostSuccess = createAction('deletePostSuccess');
const deletePostError = createAction('deletePostError');

const addPostRequest = createAction('addPostRequest');
const addPostSuccess = createAction('addPostSuccess');
const addPostError = createAction('addPostError');

const updPostRequest = createAction('updPostRequest');
const updPostSuccess = createAction('updPostSuccess');
const updPostError = createAction('updPostError');

const filterItem = createAction('filter');

export default {
  filterItem,
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
  addPostRequest,
  addPostSuccess,
  addPostError,
  updPostRequest,
  updPostSuccess,
  updPostError,
};
