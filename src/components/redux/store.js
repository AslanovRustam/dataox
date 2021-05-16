import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

// const reducer = (state = {}, action) => state;
// const postReducer = (state = [], action) => {
//   return state;
// };
const postReducer = createReducer([], {
  [actions.fetchPostSuccess]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [actions.fetchPostError]: (_, action) => action.payload,
});

const filterReducer = createReducer('', {
  [actions.filterItem]: (_state, action) => {
    return action.payload;
  },
});

const rootReducer = combineReducers({
  posts: postReducer,
  filteredPosts: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
