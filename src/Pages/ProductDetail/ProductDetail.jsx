import React, { useEffect, useState } from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../Component/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import ProductCard from '../../Component/Products/ProductCard'

    function ProductDetail() {
        const {productId} = useParams
        // console.log(productId)
        const [product, setProduct] = useState({})
        const [isLoading, setisLoading] = useState(false)
        useEffect(() => {
            setisLoading(true)
            axios.get(`${productUrl}/products/${productId}`)
            .then((res)=>{
                console.log(res.data)
                setProduct(res.data)
                setisLoading(false)
            })
            .catch((err)=>{
                console.log(err)
                setisLoading(false)
            })
        }, [])
        console.log(product)
    return (
        <LayOut>
            {isLoading? (<loader/>):(<ProductCard product={product}/>)}
            
        </LayOut>
    )
    }

export default ProductDetail