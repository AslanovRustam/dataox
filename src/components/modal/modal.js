import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import * as operations from '../redux/operations';
import s from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, post }) {
  const [title, setTitleInput] = useState(post.title);
  const [body, setBodyInput] = useState(post.body);
  // console.log(post);
  // const posts = useSelector(state => state.posts);

  const dispatch = useDispatch();
  // const handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     onClose();
  //   }
  // };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleChangeTitle = e => {
    setTitleInput(e.currentTarget.value);
  };

  const handleChangeBody = e => {
    setBodyInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log();
    // setTitleInput('');
    // setBodyInput('');
  };

  const editPost = e => {
    // dispatch(operations.createPost({ title: titleInput, body: bodyInput, userId: 1 }));
    // console.log(id);
    dispatch(operations.editPost({ title, body }, post.id));
    onClose();
  };

  return createPortal(
    <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
      <form className={s.formtStyle} onSubmit={handleSubmit}>
        <label className={s.labelModalStyle}>
          Title
          <input className={s.inputModalStyle} value={title} onChange={handleChangeTitle}></input>
        </label>

        <label className={s.labelModalStyle}>
          Body
          <input className={s.inputModalStyle} value={body} onChange={handleChangeBody}></input>
        </label>
        <button type="submit" className={s.addButton} onClick={() => editPost()}>
          Update
        </button>
      </form>
    </div>,
    modalRoot,
  );
}

// import React, { Component } from 'react';
// // import { useDispatch } from 'react-redux';
// import { createPortal } from 'react-dom';
// import s from './modal.module.css';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   state = {
//     titleInput: '',
//     bodyInput: '',
//   };
//   componentDidMount() {
//     console.log('Modal componentDidMount');
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     console.log('Modal componentWillUnmount');
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onClose();
//     }
//   };

//   //  const [titleInput, setTitleInput] = useState('');
//   // const [bodyInput, setBodyInput] = useState('');

//   // dispatch = useDispatch();

//   handleChangeTitle = e => {
//     this.setState({ titleInput: e.currentTarget.value });
//   };
//   handleChangeBody = e => {
//     this.setState({ bodyInput: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     // dispatch(operations.createPost({ title: titleInput, body: bodyInput, userId: 1 }));
//     this.setState({ titleInput: '', bodyInput: '' });
//     // setBodyInput('');
//   };

//   editPost(e) {
//     console.log(this.state.titleInput, this.state.bodyInput);
//   }

//   render() {
//     return createPortal(
//       <div className={s.Modal__backdrop} onClick={this.handleBackdropClick}>
//         <form className={s.formtStyle} onSubmit={this.handleSubmit}>
//           <label className={s.labelModalStyle}>
//             Title
//             <input
//               className={s.inputModalStyle}
//               value={this.state.titleInput}
//               onChange={this.handleChangeTitle}
//             ></input>
//           </label>

//           <label className={s.labelModalStyle}>
//             Body
//             <input
//               className={s.inputModalStyle}
//               value={this.state.bodyInput}
//               onChange={this.handleChangeBody}
//             ></input>
//           </label>
//           <button type="submit" className={s.addButton} onClick={() => this.editPost()}>
//             Update
//           </button>
//         </form>
//       </div>,
//       modalRoot,
//     );
//   }
// }
