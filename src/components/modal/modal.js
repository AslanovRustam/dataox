import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import * as operations from '../redux/operations';
import s from './modal.module.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose, post }) {
  const classes = useStyles();

  const [title, setTitleInput] = useState(post.title);
  const [body, setBodyInput] = useState(post.body);

  const dispatch = useDispatch();

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
  };

  const editPost = e => {
    dispatch(operations.editPost({ title, body }, post.id));
    onClose();
  };

  return createPortal(
    <div className={s.Modal__backdrop} onClick={handleBackdropClick}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <form className={s.formtStyle} noValidate onSubmit={handleSubmit}>
            {title && (
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="title"
                label="title"
                name="title"
                autoComplete="title"
                autoFocus
                value={title}
                onChange={handleChangeTitle}
              />
            )}
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="body"
              label="body"
              name="body"
              autoComplete="body"
              value={body}
              onChange={handleChangeBody}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              type="submit"
              onClick={() => editPost()}
            >
              Update
            </Button>
          </form>
        </div>
      </Container>
    </div>,
    modalRoot,
  );
}
