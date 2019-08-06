import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  
  },
  right: {
    position: 'relative',
    float: 'right'
  }
}));
const StyledBadge = withStyles(theme => ({
  badge: {
    top: '50%',
    right: -3,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
      }`,
  },
}))(Badge);

export default function Header(props) {
  const classes = useStyles();
  const total = props.total;
  const quantity = props.quantity;
  function handleClick (){
    props.onCartClickListener();
  }
  return (
    <div>
      <Paper className={classes.root}>
          <div>
            <IconButton aria-label="cart" onClick={handleClick}>
              <StyledBadge badgeContent={quantity} color="primary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <Typography component="p" >
              Total: {total} Lei
         <br />
              {/* Quantity: {quantity} items */}
        </Typography>
          </div>
      </Paper>
    </div>
  );
}