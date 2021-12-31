import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, InputLabel, Select, MenuItem} from '@material-ui/core';

import { Radio, RadioGroup} from 'react-radio-group'

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    const tallas = [
        { id: 1, value: 'chico', name: 'Grande' },
        { id: 2, value: 'mediano', name: 'Mediano' },
        { id: 3, value: 'grande', name: 'Grande' }            
    ];
    
    

    return (
        <Card className={classes.root}>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)} > - </Button>
                    <Typography> {item.quantity} </Typography> 
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)} > + </Button>
                </div>

                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)} > Eliminar </Button>
               
                <Grid item xs={12} sm={6}>
                    <InputLabel>Tallas</InputLabel>
                    <Select label="GG">
                        {tallas.map((talla) => (
                                <MenuItem key={talla.id} value={talla.id}>
                                    {talla.name}
                                </MenuItem>    
                            ))}
                    </Select>
                </Grid>         
               
            </CardActions>
        </Card>
    )
}

export default CartItem