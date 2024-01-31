import React from 'react'
import LayOut from '../../Component/LayOut/LayOut';
import CarouselEffect from '../../Component/Carousel/Carousel';
import Category from '../../Component/Category/Category';
import Product from '../../Component/Products/Product';


function Landing() {
    return (
        <div>
            <LayOut>
                <CarouselEffect />
                <Category />
                <Product />
            </LayOut>
        </div>
    )
}

export default Landing