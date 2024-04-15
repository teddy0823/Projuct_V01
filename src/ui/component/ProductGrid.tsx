import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {styled} from "@mui/material/styles";

interface Product {
    pid: number;
    name: string;
    imageUrl: string;
    price: number;
}

interface ProductGridProps {
    products: Product[];
}

const CustomButton = styled(Button)({
    backgroundColor: '#49A299',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#357c75',
    },
});

export default function ProductGrid({ products }: ProductGridProps) {
    if (!products) {
        return null;
    }
    return (
        <Grid container spacing={2}>
            {products.map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Paper style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* 商品圖片 */}
                        <img src={product.imageUrl} alt={product.name} />

                        <Typography variant="subtitle1" align="center">{product.name}</Typography>

                        <Typography variant="body2" align="center" style={{ color: 'red' }}>HK${product.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Typography>
                        <CustomButton  component={Link} to={`/public/product/${product.pid}`} variant="contained" >查看詳情</CustomButton>

                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
}