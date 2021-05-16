import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const postReducer = createReducer([], {
  [actions.fetchPostSuccess]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [actions.fetchPostError]: (_, action) => action.payload,
});

// const filterReducer = createReducer('', {
//   [actions.filterItem]: (_state, action) => {
//     return action.payload;
//   },
// });
const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case 'filter':
      return payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
  filteredPosts: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// import { createStore } from 'redux';
// const reducer = (state = {}, action) => state;
// const postReducer = (state = [], action) => {
//   return state;
// };
