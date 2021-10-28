import React from "react";
import { Grid } from '@material-ui/core';

import Product from "./Product/Product";
import useStyles from './styles';

const products = [
    { id:1, name: 'zapato', description: 'Zapatos deportivos.', price: '$5', image: 'https://www.adidas.mx/tenis-superstar/C77124.html'},
    { id:2, name: 'Laptop', description: 'Laptop gamer.', price: '$50', image: 'https://www.sears.com.mx/producto/498291/laptop-gamer-hp-omen-i7-9750h-8gb-1tbdd-128ssd-15-dc1004la/'},

];



const Products = () => {
    const classes = useStyles();
    return ( 
        <main className={classes.content}>
        <div className = {classes.toolbar} />

        <Grid container justify = "center " spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
   
}
export default Products;