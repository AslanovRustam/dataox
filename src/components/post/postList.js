import React from 'react';
import { useState, useEffect } from 'react';
import { fetchAllPosts } from '../../fetch/fetch';
import Post from './post';
import s from './postList.module.css';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchAllPosts().then(res => setPosts(res));
  }, []);
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Post title={post.title} body={post.body} />
          </li>
        ))}
      </ul>
    </div>
  );
}
