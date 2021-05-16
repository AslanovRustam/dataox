import React from 'react';
import Post from './post';
export default function PostList(postList) {
  return (
    <div>
      <ul>
        {postList.map(post => (
          <li key={post.id}>
            <Post title={post.title} body={post.body} />
          </li>
        ))}
      </ul>
    </div>
  );
}
