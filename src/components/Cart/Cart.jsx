import { DeleteOutlined } from '@mui/icons-material'
import React from 'react'
import './Cart.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { credentials } from '../../../credentials'
import { removeItem, resetCart } from '../../Redux/cartReducer';
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {

  const products = useSelector(state=>state.cart.products)
  const dispatch = useDispatch()
  
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity*item.price
    })
    return total.toFixed(2);
  }

  const stripePromise = loadStripe(
    "pk_test_51NQrxqSBEeSqNoENtMoti4Osdwhph6RV9GLoxLzw28cYVzcTBZe2IzoV3TtbiM2b9StaF9LJnddXbGwEipsuPw1P00E4CTkzzK"
  );


  const handlePayment = async () => {
    try {
      const stripe = await stripePromise

      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map(item =>(
        <div className='item' key={item.id}>
          <img src={credentials.REACT_APP_UPLOAD_URL +item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlined className='delete' onClick={() => dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart