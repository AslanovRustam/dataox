import React from 'react';
import { useState, useEffect } from 'react';
import * as operations from '../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../post/post';
// import { fetchAllPosts } from '../../fetch/fetch';

export default function Pagination() {
  const [postsForPagination, setPostsForPagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const scrollHandler = e => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      console.log('scroll');
    }
    // console.log('scrollHeight', e.target.documentElement.scrollHeight);
    // console.log('scrollTop', e.target.documentElement.scrollTop);
    // console.log('innerHeight', window.innerHeight);
  };
  const filteredPosts = useSelector(state => state.filteredPosts);

  useEffect(() => {
    if (fetching) {
      console.log('fetching');
      fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
        .then(response => {
          return response.json();
        })
        .then(response => {
          setPostsForPagination([...postsForPagination, ...response]);
          setCurrentPage(prevstate => prevstate + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div>
      {/* {updParsedPosts.length > 0 && ( */}
      <ul>
        {postsForPagination.map(post => (
          <li key={post.id}>
            <div>
              <Post title={post.title} body={post.body} email={post.email} name={post.name} />
            </div>
            <button>Delete</button>
            <button

            // onClick={() => editPost({ tittle: post.title, body: post.body }, post.id)}
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      {/* // )} */}
    </div>
  );
}

// export default function Pagination() {
//   const filteredPosts = useSelector(state => state.filteredPosts);
//   let current_page = 1;
//   let rows = 10;
//   const list_element = document.getElementById('list');
//   const pagination_element = document.getElementById('pagination');
//   function DisplayList(items, wrapper, rows_per_page, page) {
//     wrapper.innerHTML = '';
//     page--;

//     let start = rows_per_page * page;
//     let end = start + rows_per_page;
//     let paginatedItems = items.slice(start, end);

//     for (let i = 0; i < paginatedItems.length; i++) {
//       let item = paginatedItems[i];

//       let item_element = document.createElement('div');
//       item_element.classList.add('item');
//       item_element.innerText = item;

//       wrapper.appendChild(item_element);
//     }
//   }

//   function SetupPagination(items, wrapper, rows_per_page) {
//     wrapper.innerHTML = '';

//     let page_count = Math.ceil(items.length / rows_per_page);
//     for (let i = 1; i < page_count + 1; i++) {
//       let btn = PaginationButton(i, items);
//       wrapper.appendChild(btn);
//     }
//   }

//   function PaginationButton(page, items) {
//     let button = document.createElement('button');
//     button.innerText = page;

//     if (current_page == page) button.classList.add('active');

//     button.addEventListener('click', function () {
//       current_page = page;
//       DisplayList(items, list_element, rows, current_page);

//       let current_btn = document.querySelector('.pagenumbers button.active');
//       current_btn.classList.remove('active');

//       button.classList.add('active');
//     });

//     return button;
//   }
//   return (
//     <h1>
//       Hello
//       {SetupPagination(filteredPosts, pagination_element, rows)}
//     </h1>
//   );
// }
