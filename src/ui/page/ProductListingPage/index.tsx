
import NavList from "../../component/NavList.tsx";
import SearchAppBar from "../../component/SearchAppBar.tsx";
import ProductGrid from "../../component/ProductGrid.tsx";
import {ProductDataDto} from "../../../data/ProductDataDto.ts";
import  mockData from "./response.json"
import {useEffect, useState} from "react";
import {Container} from "@mui/material";


export default function ProductListingPage(){

    const[productDataDto,setProductDataDto]=useState<ProductDataDto | undefined>(undefined);

    useEffect(()=>{
        setProductDataDto(mockData);
    },[])
    return(
        <>
            <Container>

            {/*<NavList/>*/}
            <h1>Product Listing</h1>
            <ProductGrid products={productDataDto}/>
            </Container>

        </>
    )
}