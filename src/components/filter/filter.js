import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as operations from '../redux/operations';
import s from './filter.module.css';

export default function FilterSection(onSubmit) {
  const [filterInput, setFilterInput] = useState('');
  const posts = useSelector(state => state.posts);
  // console.log(posts);
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(filterInput);
    dispatch(operations.findPost(filterInput));
    // onSubmit(filterInput);
    setFilterInput('');
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmitForm}>
          <label>
            {' '}
            To search posts by ID, please enter it here
            <input
              type="text"
              placeholder="enter your search input"
              value={filterInput}
              onChange={e => setFilterInput(e.currentTarget.value)}
            />
          </label>
          <button type="submit">find</button>
        </form>
      </div>
    </>
  );
}
