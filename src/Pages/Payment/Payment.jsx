import React, {useContext, useState} from 'react';
import classes from "./Payment.module.css"
import LayOut from '../../Component/LayOut/LayOut';
import { DataContext } from '../../Component/DataProvider/DataProvider';
import ProductCard from '../../Component/Products/ProductCard'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../Component/CurrencyFormat/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import { ClipLoader } from 'react-spinners';
import { db } from '../../Utility/firebase';
import { useNavigate } from 'react-router-dom';
import { Type } from '../../Utility/action.type';



function Payment() {

  const [{user, basket}, dispatch]= useContext(DataContext)
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
const navigate = useNavigate();

const [cardError, setCardError] = useState(null)
const [processing, setProcessing] = useState(false)


const handleChange = (event)=> {
  // console.log(event)
  event?.error?.message? setCardError(event?.error?.message): setCardError("")
};

const handlePayment = async (event) => {
  // refresh kaderege stachinin enatalen
  event.preventDefault();

  try {
    setProcessing(true)
    // 1. backend || functions ---> contact to the client secret
    const response = await axiosInstance({
      method: "POST",
      url: `/payment/create?total=${total * 100}`,
    });

    // console.log(response.data);
    const clientSecret = response.data?.cliantSecret;

    // 2. client side react confirmation
    const{ paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    console.log(paymentIntent);

    // 3. after the conformation --> order firestore database save, clear basket
    
    await db
  .collection("users")
  .doc(user.uid)
  .collection("orders")
  .doc(paymentIntent.id)
  .set({
    basket: basket,
    amount: paymentIntent.amount,
    created: paymentIntent.created,
  });
  // empty the basket
  dispatch({type:Type.EMPTY_BASKET})
  setProcessing(false);
  navigate("/orders", { state: { message: "You have placed a new order." } });
  
  } catch (error) {
    console.error(error);
    setProcessing(false)

    // Display error message to the user
    setCardError("An error occurred during payment. Please try again later.");
    // console.log(error.message)
  }
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
    {user? (
      <>
        <div>{user.email}</div>
        <div>123 React Lane</div>
        <div>Calgary, AB</div>
      </>
    ) : (
      <div>Loading user data...</div>
    )}
  </div>
</div>
        <hr />

{/* products */}
<div className={classes.flex}>
  <h3>Review items and Delivery</h3>
  <div>
    {
      basket?.map((item, i) => (
        <ProductCard 
          product={item} 
          flex={true}
          key={i}
        />
      ))
    }
  </div>
</div>

        <hr />
{/* card form */}
        <div className={classes.flex}>
          <h3>Payment methods</h3>
          <div className={classes.Payment__card__container}>
            <div className={classes.payment__details}>
              <form onSubmit={handlePayment}>
                {/* error */}
                {cardError && ( <small style={{color: "red" }}>{cardError}</small>
                )}
                {/* card element*/}
                <CardElement onChange={handleChange}/>

                {/* price to pay */}
                <div className={classes.payment__price}>
                    <p style={{display:"flex", gap:"10px"}}>
                      Total Order | <h4><CurrencyFormat amount={total}/></h4> 
                    </p>
                  <button type='submit'>
                    {
                      processing? (
                        <div className={classes.processing}>
                          <ClipLoader color='gray' size={12}/>
                          <p>Please Wait ...</p>
                        </div>
                      ): "Pay Now"
                    } 
                  </button>
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