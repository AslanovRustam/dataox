const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchAllPosts = () => {
  return fetch(`${BASE_URL}/posts`).then(response => {
    return response.json();
  });
};

const fetchCommentsToPost = id => {
  return fetch(`${BASE_URL}/posts/${id}/comments`).then(response => {
    return response.json();
  });
};

//

const addPost = post => {
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
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
const currentPageFetch = currentPage => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`).then(response => {
    return response.json();
  });
};
export {
  filterPost,
  fetchAllPosts,
  addPost,
  updPost,
  fetchdeletePost,
  fetchCommentsToPost,
  currentPageFetch,
};
