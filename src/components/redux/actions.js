import { createAction } from '@reduxjs/toolkit';

const fetchPostRequest = createAction('fetchPostRequest');
const fetchPostSuccess = createAction('fetchPostSuccess');
const fetchPostError = createAction('fetchPostError');

const filterItem = createAction('filter');

export default { filterItem, fetchPostRequest, fetchPostSuccess, fetchPostError };
