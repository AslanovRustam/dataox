import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState, useEffect } from 'react';
import * as operations from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Post from './post';
import Modal from '../modal/modal';
import Pagination from '../pagination/pagination';
import s from './postList.module.css';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function PostList() {
  const classes = useStyles();
  const filteredPosts = useSelector(state => state.filteredPosts);
  console.log('filteredPosts', filteredPosts);

  const pagesCount = Math.ceil(filteredPosts.length / 10);
  console.log('pagesCount', pagesCount);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchPosts());
  }, []);

  console.log('posts', posts);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  function paginate(pageNumber) {
    return setCurrentPage(pageNumber);
  }
  console.log('typeof paginate', typeof paginate);

  function deletePost(id) {
    console.log('id', id);
    dispatch(operations.deletePost(id));
  }

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
      <div>
        <ul>
          {currentPosts.map(post => (
            <li className={s.elementPostCard} key={post.id}>
              <div onClick={() => getComentsToPost(post.id)}>
                <Post title={post.title} body={post.body} email={post.email} name={post.name} />
              </div>
              <div className={s.buttonContainer}>
                <div>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </Button>
                </div>
                <div>
                  <Button variant="contained" color="primary" onClick={e => toggleModal(post)}>
                    Update
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={filteredPosts.length}
        paginate={paginate}
      />
      {showModal && <Modal onClose={toggleModal} post={currentPost} />}
    </>
  );
}

// localStorage.setItem('posts', JSON.stringify(posts));
// const postsFromLocalStorage = localStorage.getItem('posts');
// const parsedPostsFromLocalStorage = JSON.parse(postsFromLocalStorage);

// let updParsedPosts = parsedPostsFromLocalStorage;
// localStorage.setItem('updParsedPosts', JSON.stringify(updParsedPosts));
// const updpostsFromLocalStorage = localStorage.getItem('posts');
// const updparsedPostsFromLocalStorage = JSON.parse(updpostsFromLocalStorage);
// console.log(updparsedPostsFromLocalStorage);
