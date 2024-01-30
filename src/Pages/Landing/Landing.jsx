import React from 'react'
import LayOut from '../../Component/LayOut/LayOut';
import CarouselEffect from '../../Component/Carousel/Carousel';
import Category from '../../Component/Category/Category';


function Landing() {
    return (
        <div>
            <LayOut>
                <CarouselEffect />
                <Category />
            </LayOut>
        </div>
    )
}

export default Landing