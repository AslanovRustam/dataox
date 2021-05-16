const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchAllPosts = () => {
  return fetch(`${BASE_URL}/posts`).then(response => {
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

export { fetchAllPosts };
