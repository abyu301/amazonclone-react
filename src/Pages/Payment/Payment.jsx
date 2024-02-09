import React, {useContext} from 'react';
import classes from "./Payment.module.css";
import LayOut from '../../Component/LayOut/LayOut';
import { DataContext } from '../../Component/DataProvider/DataProvider';
import ProductCard from '../../Component/Products/ProductCard'


function Payment() {

  const [{user, basket}]= useContext(DataContext)
  // console.log(user)

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
}, 0);
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
        <div></div>
        </section>
    </LayOut>
  )
}

export default Payment