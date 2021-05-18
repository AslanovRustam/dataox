import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const postReducer = createReducer([], {
  [actions.fetchPostSuccess]: (_, action) => {
    return action.payload;
  },
});

const filterReducer = createReducer([], {
  [actions.fetchPostSuccess]: (_, action) => {
    return action.payload;
  },
  [actions.addPostSuccess]: (state, action) => {
    return [action.payload, ...state];
  },
  [actions.deletePostSuccess]: (state, action) => {
    return state.filter(post => post.id !== action.payload);
  },
  [actions.updPostSuccess]: (state, action) => {
    return state.map(post => {
      if (action.payload.id === post.id) {
        return { ...action.payload };
      }
      return post;
    });
  },
  [actions.comentToPostSuccess]: (state, action) => {
    console.log(action.payload);
    return action.payload;
  },
  [actions.filterSuccess]: (state, action) => {
    console.log('action.payload', action.payload);
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
