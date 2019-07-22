import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
    button: {
        margin: theme.spacing(0),
        ms:10,
        background: 'green',
        color: 'white',

    },
    input: {
        display: 'none',
    },
}));

export default function Item(props) {
    const classes = useStyles();
    const handler = props.action;
    const [value, setValue] = React.useState(0);
    function IncrementValue() {
        setValue(value + 1);

    }
    function DecrementValue() {
        if (value > 0) {
            setValue(value - 1);
        }
    }
    function addToCard(){
        handler(value*props.price,props.id);
    }
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia

                    className={classes.media}
                    image={props.imgUrl}
                    title={props.itemName}
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                        <span text-align="center">  {props.itemName}</span>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" align="center">
                        <span> {props.price} Lei</span>
                    </Typography>
                </CardContent>

            </CardActionArea>

            <CardActions style={{ justifyContent: 'center' }} >
                <div>
                    <Fab size="small" aria-label="Add" className={classes.fab} onClick={IncrementValue}>
                        <AddIcon />
                    </Fab>
                    <span> {value} </span>
                    <Fab aria-label="Delete" size="small" className={classes.fab} onClick={DecrementValue}>
                        <RemoveIcon />
                    </Fab>
                    <br />
                
                    <Button variant="contained" className={classes.button} onClick={addToCard}>
                        Add to cart</Button> </div>
            </CardActions>
        </Card>
    )
}
