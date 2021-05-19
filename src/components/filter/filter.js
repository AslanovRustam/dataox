import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as operations from '../redux/operations';
import s from './filter.module.css';

export default function FilterSection() {
  const [filterInput, setFilterInput] = useState('');
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    console.log(filterInput);
    dispatch(operations.findPost(filterInput));
    setFilterInput('');
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmitForm}>
          <label>
            {' '}
            To search posts by userID, please enter it here
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
