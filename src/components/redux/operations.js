import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllPosts } from '../../fetch/fetch';
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

// export const fetchPosts = createAsyncThunk('books/fetchBooks', async (_, { rejectWithValue }) => {
//   try {
//     const books = await bookShelfAPI.fetchBooks();
//     return books;
//   } catch (error) {
//     return rejectWithValue(error);
//   }
// });
// export default fetchPosts;
