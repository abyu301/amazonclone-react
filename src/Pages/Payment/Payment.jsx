import React, {useContext, useState} from 'react';
import classes from "./Payment.module.css";
import LayOut from '../../Component/LayOut/LayOut';
import { DataContext } from '../../Component/DataProvider/DataProvider';
import ProductCard from '../../Component/Products/ProductCard'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat';
import { BsDisplay } from 'react-icons/bs';



function Payment() {

  const [{user, basket}]= useContext(DataContext)
  // console.log(user)

  // total-Item
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
}, 0);

// total-price
const total = basket.reduce((amount, item) => {
  return item.price * item.amount + amount
}, 0);

const stripe = useStripe();
const elements = useElements();

const [cardError, setCardError] = useState(null)
const handleChange = (event)=> {
  // console.log(event)
  event?.error?.message? setCardError(event?.error?.message): setCardError("")
};



  return (
    <LayOut> 
{/* Header */}
        <div className={classes.Payment__header}>
          Checkout ({totalItem}) items
        </div>
{/* Payment method */}
        <section className={classes.Payment}>
{/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user.email}</div>
            <div>123 React Lane</div>
            <div>Calgary, AB</div>
          </div>
        </div>
        <hr />

{/* products */}
        <div className={classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {
              basket?.map((item)=><ProductCard product={item} flex={true}/>)
            }
          </div>
        </div>
        <hr />
{/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.Payment__card__container}>
            <div className={classes.payment__details}>
              <form action="">
                {/* error */}
                {cardError && ( <small style={{color: "red" }}>{cardError}</small>
                )}
                {/* card element*/}
                <CardElement onChange={handleChange}/>

                {/* price to pay */}
                <div className={classes.payment__price}>
                  <div>
                    <span style={{display:"flex", gap:"10px"}}>
                      <p> Total Order | </p> <h4><CurrencyFormat amount={total}/></h4> 
                    </span>
                  </div>
                  <button> Pay Now </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </section>
    </LayOut>
  )
}

export default Payment