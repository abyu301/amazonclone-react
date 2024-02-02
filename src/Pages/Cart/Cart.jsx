import React, { useContext } from 'react'
import LayOut from '../../Component/LayOut/LayOut'
import { DataContext } from '../../Component/DataProvider/DataProvider'
import ProductCart from '../../Component/Products/ProductCard'

function Cart() {
    const [{basket, user }, dispatch] = useContext(DataContext);
    return (
        <LayOut> 
            <section>
                <div>
                    <h2>Hello</h2>
                    <h3>Your Shopping Basket</h3>
                    <hr />
                    {
                        basket?.length==0?(<p>Opps ! No item in your cart</p>):(basket?.map((item,i)=>{
                            return <ProductCart
                            key={i}
                            product={item}
                            renderDesc={true}
                            flex={true}
                            />
                        }))
                    }
                </div>
                <div></div>
            </section>
        </LayOut>
    )
}

export default Cart