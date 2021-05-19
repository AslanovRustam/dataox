import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createMuiTheme, withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import * as operations from '../redux/operations';
import s from './filter.module.css';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function FilterSection() {
  const classes = useStyles();

  const [filterInput, setFilterInput] = useState('');
  const dispatch = useDispatch();

  function handleSubmitForm(e) {
    e.preventDefault();
    dispatch(operations.findPost(filterInput));
    setFilterInput('');
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmitForm}>
          <TextField
            id="outlined-basic"
            label=" please enter userID"
            variant="outlined"
            value={filterInput}
            onChange={e => setFilterInput(e.currentTarget.value)}
          />
          {/* </label> */}
          <ColorButton variant="contained" color="primary" className={classes.margin} type="submit">
            find
          </ColorButton>
        </form>
      </div>
    </>
  );
}
