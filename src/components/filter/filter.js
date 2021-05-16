import React, { useState } from 'react';
import s from './filter.module.css';

export default function FilterSection() {
  const [filterInput, setFilterInput] = useState('');
  return (
    <>
      <div>
        <span>To search posts by ID, please enter it here</span>
      </div>
      <div>
        <label>
          <input
            type="text"
            placeholder="enter your search input"
            value={filterInput}
            onChange={e => setFilterInput(e.currentTarget.value)}
          />
        </label>
      </div>
    </>
  );
}
