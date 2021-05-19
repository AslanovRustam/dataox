import React from 'react';

import s from './pagination.module.css';

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={s.center}>
      <div className={s.pagination}>
        <ul className={s.paginationList}>
          {pageNumbers.map(number => (
            <li key={number} className={s.item}>
              <a onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// <nav>
//   <ul className={s.paginationList}>
//     {pageNumbers.map(number => (
//       <li key={number} className={s.item}>
//         <a onClick={() => paginate(number)} href="!#">
//           {number}
//         </a>
//       </li>
//     ))}
//   </ul>
// </nav>;

//  <ul>
//    {pageNumbers.map(number => (
//      <li key={number} onClick={() => paginate(number)}>
//        <PaginationStyles count={number} />
//        {/* <a onClick={() => paginate(number)} href="!#">
//               {number}
//             </a> */}
//      </li>
//    ))}
//  </ul>;
