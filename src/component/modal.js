import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function rand() {
  const value = Math.round(Math.random() * 20) - 10;
  console.log("value: " + value);
  return value;
}

function getModalStyle() {
  const top = 30;
  const left = 55;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${left}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function SimpleModal(props) {
  console.log(props)
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(props.status);
  const handleClose = () => {
    props.onClose()
  };

  console.log('productsQuantity', props.productsQuantity)

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.status}
      onClose={handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              props && props.products ? props.products.map(product => {
                
                
                return (
                  <div key={product.name}>
                    { product.name }
                  </div>
                )
             }) : null
       //       console.log("productQuantity: " +productQuantity)
//               Object.keys(productQuantity).forEach(function (product) {
//                 let counter=1;
// console.log("product: " +product);
//                //let quantity =  productQuantity[product];
//                 <TableRow key={counter+1}>
//                 <TableCell component="th" scope="row">
//                   {product.name}
//                 </TableCell>
//                 {/* <TableCell align="right">{row.calories}</TableCell>
//                 <TableCell align="right">{row.fat}</TableCell>
//                 <TableCell align="right">{row.carbs}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell> */}
//               </TableRow>

//               })
            }
          </TableBody>
        </Table>
      </div>
    </Modal>
  );
}