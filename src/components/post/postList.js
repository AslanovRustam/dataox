import React from 'react';
import { useState, useEffect } from 'react';
import * as operations from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Post from './post';
import Modal from '../modal/modal';
import Pagination from '../pagination/pagination';
import s from './postList.module.css';

export default function PostList() {
  const posts = useSelector(state => state.posts);
  const filteredPosts = useSelector(state => state.filteredPosts);
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
    console.log('id', id);
    dispatch(operations.deletePost(id));
  }
  // const postsForList = filteredPosts.length > 0 ? filteredPosts : updParsedPosts;

  const [showModal, setShowmodal] = useState(false);
  const [currentPost, setCurrentPost] = useState('');

  const toggleModal = post => {
    setShowmodal(!showModal);
    setCurrentPost(post);
  };

  function getComentsToPost(id) {
    dispatch(operations.postWithComents(id));
  }
  return (
    <>
      {/* <div>
        <ul>
          {filteredPosts.map(post => (
            <li className={s.elementPostCard} key={post.id}>
              <div onClick={() => getComentsToPost(post.id)}>
                <Post title={post.title} body={post.body} email={post.email} name={post.name} />
              </div>
              <button className={s.postButton} onClick={() => deletePost(post.id)}>
                Delete
              </button>
              <button
                className={s.postButton}
                // onClick={() => editPost({ tittle: post.title, body: post.body }, post.id)}
                onClick={e => toggleModal(post)}
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div> */}
      <Pagination />
      {showModal && <Modal onClose={toggleModal} post={currentPost} />}
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

////////////////////////
// function editPost(post, id) {
//   dispatch(operations.editPost(post, id));
// }
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
