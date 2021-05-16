import React from 'react';
import { useState } from 'react';
import { fetchAllPosts } from '../../fetch/fetch';
import Post from './post';
import s from './postList.module.css';

export default async function PostList() {
  const [posts, setPosts] = useState([]);
  // let fetchAll = fetchAllPosts().then(data =>
  //   data.map(post =>
  //     console.log(
  //       <li key={post.id}>
  //         <Post title={post.title} body={post.body} />
  //       </li>,
  //     ),
  //   ),
  // );
  let fetchAll = await fetchAllPosts();
  setPosts(await fetchAllPosts());
  // let fetchAll = fetchAllPosts().then(data => {
  //   return data.map(d => console.log(d));
  // });
  // const fetchAll = fetchAllPosts().then(data => console.log(data));

  // console.log(fetchAllPosts());
  console.dir(fetchAll);
  console.log(posts);

  return (
    <div>
      <ul>
        {fetchAll.map(post => (
          <li key={post.id}>
            <Post title={post.title} body={post.body} />
          </li>
        ))}
      </ul>
    </div>
  );
}
