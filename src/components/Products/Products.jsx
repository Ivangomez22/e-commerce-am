import React from "react";
import { Grid } from '@material-ui/core';

import Product from "./Product/Product";

const products = [
    {id:1, name: 'zapato', description: 'Zapatos deportivos.', price: '$5', image: ''},
    {id:2, name: 'Laptop', description: 'Laptop gamer.', price: '$50', image: 'https://www.google.com/search?q=omen&tbm=isch&ved=2ahUKEwiMgamMktrzAhUMYawKHcHACZsQ2-cCegQIABAA&oq=omen&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEO8DECc6BwgAELEDEEM6BAgAEEM6CggjEO8DEOoCECc6CAgAELEDEIMBUK-BA1iqjwNgipQDaAFwAHgBgAGSAogBkguSAQUwLjcuMZgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=CaZwYczYLYzCsQXBgafYCQ&bih=714&biw=1536#imgrc=XPyjj16UgRgh_M'},

];



const Products = () => {
    
    return ( 
        <main>
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