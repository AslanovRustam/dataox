import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import s from './addPost.module.css';
import * as operations from '../redux/operations';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: '25ch',
  },
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
}));

export default function AddPost() {
  const classes = useStyles();

  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');

  const dispatch = useDispatch();

  const handleChangeTitle = e => {
    setTitleInput(e.currentTarget.value);
  };
  const handleChangeBody = e => {
    setBodyInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.createPost({ userId: 1, title: titleInput, body: bodyInput }));
    setTitleInput('');
    setBodyInput('');
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="standard-secondary"
        label="Title"
        color="secondary"
        value={titleInput}
        onChange={handleChangeTitle}
      />

      <TextField
        id="standard-secondary"
        label="Body"
        color="secondary"
        value={bodyInput}
        onChange={handleChangeBody}
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        type="submit"
      >
        Create
      </Button>
    </form>
  );
}
