import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Icon } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingBasket';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Header(props) {
  const classes = useStyles();
const total = props.total;
  return (
    <div>
      <Paper className={classes.root}>
        <Typography component="p">
         Total: {total} Lei
        </Typography>
        <ShoppingCart/>
      </Paper>
    </div>
  );
}