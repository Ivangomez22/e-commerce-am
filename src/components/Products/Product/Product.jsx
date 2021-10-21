import React from 'react'

import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Prodcut = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className = {classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.name}/>
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price}
                    </Typography>
                    <Typography variant="body2" color="textSecundary">
                        {product.description}
                    </Typography>

                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton area-label="agregar al carrito">
                    <AddShoppingCart/>
                </IconButton>

            </CardActions>
        </Card>
    );
}

export default Prodcut
