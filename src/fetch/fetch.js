const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchAllPosts = () => {
  return fetch(`${BASE_URL}/posts`).then(response => {
    return response.json();
  });
};

const fetchCommentsToPosts = id => {
  return fetch(`${BASE_URL}/posts/${id}/comments`).then(response => {
    return response.json();
  });
};

const fetchPostsById = id => {
  return fetch(`${BASE_URL}/posts/${id}`).then(response => {
    return response.json();
  });
};

const addPost = post => {
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
    // body: JSON.stringify({
    //   title: 'foo',
    //   body: 'bar',
    //   userId: 1,
    // }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(response => {
    return response.json();
  });
};

const updPost = (update, id) => {
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(update),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(response => {
    return response.json();
  });
};

const fetchdeletePost = id => {
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  }).then(response => {
    return response.json();
  });
};

const filterPost = userid => {
  return fetch(`${BASE_URL}/posts?userId=${userid}`).then(response => {
    return response.json();
  });
};
// async function fetchAllPosts() {
//   const response = await fetch(`${BASE_URL}/posts`);
//   const posts = await response.json();
//   return posts;
// }

// const fetchPostsbyId = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
//     return response.json();
//   });
// };

export {
  filterPost,
  fetchAllPosts,
  fetchPostsById,
  addPost,
  updPost,
  fetchdeletePost,
  fetchCommentsToPosts,
};
