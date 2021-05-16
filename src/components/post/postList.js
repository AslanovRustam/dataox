import React from 'react';
import { useEffect } from 'react';
import * as operations from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Post from './post';
import s from './postList.module.css';

export default function PostList() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.length > 0 && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Post title={post.title} body={post.body} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// import { fetchAllPosts } from '../../fetch/fetch';
// import { useState, useEffect } from 'react';

// export default function PostList() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     fetchAllPosts().then(res => setPosts(res));
//   }, []);
//   return (
//     <div>
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <Post title={post.title} body={post.body} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
