import React from 'react'
import LayOut from '../../Component/LayOut/LayOut';
import CarouselEffect from '../../Component/Carousel/Carousel';
import Category from '../../Component/Category/Category';
import Product from '../../Component/Products/Product';
import Footer from '../../Component/Footer/Footer'


function Landing() {
    return (
        <div>
            <LayOut>
                <CarouselEffect />
                <Category />
                <Product />
                <Footer />
            </LayOut>
        </div>
    )
}

export default Landing