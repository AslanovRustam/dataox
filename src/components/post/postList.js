import React from 'react';
import { useState, useEffect } from 'react';
import * as operations from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Post from './post';
import Modal from '../modal/modal';
import s from './postList.module.css';

export default function PostList() {
  const posts = useSelector(state => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchPosts());
  }, [dispatch]);

  localStorage.setItem('posts', JSON.stringify(posts));
  const postsFromLocalStorage = localStorage.getItem('posts');
  const parsedPostsFromLocalStorage = JSON.parse(postsFromLocalStorage);

  let updParsedPosts = parsedPostsFromLocalStorage;
  localStorage.setItem('updParsedPosts', JSON.stringify(updParsedPosts));
  const updpostsFromLocalStorage = localStorage.getItem('posts');
  const updparsedPostsFromLocalStorage = JSON.parse(updpostsFromLocalStorage);
  // console.log(updparsedPostsFromLocalStorage);

  function deletePost(id) {
    dispatch(operations.deletePost(id));
  }

  function editPost(post, id) {
    dispatch(operations.editPost(post, id));
  }
  // function deletePost(id) {
  //   updParsedPosts = updParsedPosts.filter(post => post.id !== id);
  //   console.log(updParsedPosts);
  //   localStorage.setItem('updParsedPosts', JSON.stringify(updParsedPosts));
  //   // console.log(updparsedPostsFromLocalStorage);
  //   return updParsedPosts;
  // }
  // console.log(updParsedPosts);
  // function deletePost(id) {
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(operations.deletePosts(id));
  //   }, [dispatch]);
  //   return console.log(id);
  // }
  const [showModal, setShowmodal] = useState(false);

  const toggleModal = () => setShowmodal(!showModal);
  return (
    <>
      <div>
        {updParsedPosts.length > 0 && (
          <ul>
            {updParsedPosts.map(post => (
              <li className={s.elementPostCard} key={post.id} onClick={e => console.log(post.id)}>
                <Post title={post.title} body={post.body} />
                <button className={s.postButton} onClick={() => deletePost(post.id)}>
                  Delete
                </button>
                <button
                  className={s.postButton}
                  // onClick={() => editPost({ tittle: post.title, body: post.body }, post.id)}
                  onClick={toggleModal}
                >
                  Update
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {showModal && <Modal onClose={toggleModal} />}
    </>
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
