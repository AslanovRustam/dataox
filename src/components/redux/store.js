import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const postReducer = createReducer([], {
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
    console.log(action.payload);
    // return state.push(action.payload);
  },
  [actions.filterSuccess]: (state, action) => {
    console.log(action.payload);
    // return state.push(action.payload);
  },
});

// const error = createReducer(null, {
//   [actions.fetchPostError]: (_, action) => action.payload,
// });

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
