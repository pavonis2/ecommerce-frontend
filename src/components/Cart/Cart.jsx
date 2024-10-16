import { DeleteOutlined } from '@mui/icons-material'
import React from 'react'
import './Cart.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { removeItem, resetCart } from '../../Redux/cartReducer';
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Cart = ({open, setOpen}) => {

  const products = useSelector(state=>state.cart.products)
  const dispatch = useDispatch()
  
  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity*item.price
    })
    return total.toFixed(2);
  }

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise

      const res = await makeRequest.post("/orders", {
        products,
      });
      dispatch(resetCart())
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
      <div 
        style={{position:"absolute", right:"15px", top:"24px", color:"black", cursor:"pointer"}}
        onClick={() => {setOpen(!open)}}
      >
        ❌
      </div>
      {products?.map(item =>(
        <div className='item' key={item.id}>
          <img src={import.meta.env.VITE_UPLOAD_URL +item.img} alt="" />
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