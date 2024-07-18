import React, { useState } from 'react'
import './Product.scss'
import { AddShoppingCart, Balance, FavoriteBorder } from '@mui/icons-material';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { credentials } from '../../../credentials';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartReducer';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  /* const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  ]; */

  return (
    <div className='product'>
      {loading ? ("loading") : (<><div className="left">
        <div className="images">
          <img src={credentials.REACT_APP_UPLOAD_URL +data?.attributes?.img?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img")} loading="lazy"/>
          <img src={credentials.REACT_APP_UPLOAD_URL +data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")} loading="lazy"/>
        </div>
        <div className="mainImg">
          <img src={credentials.REACT_APP_UPLOAD_URL +data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>${data?.attributes?.price}</span>
        <p>
        {data?.attributes?.desc}
        </p>
        <div className="quantity">
          <button onClick={() => {setQuantity(prev => prev === 1 ? 1 : prev - 1)}}>-</button>
          {quantity}
          <button onClick={() => {setQuantity(prev => prev + 1)}}>+</button>
        </div>
        <button className="add" onClick={()=>dispatch(addToCart({
          id:data.id,
          title:data.attributes.title,
          desc:data.attributes.desc,
          price:data.attributes.price,
          img:data.attributes.img.data.attributes.url,
          quantity,
        }))}>
          <AddShoppingCart />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorder />
            ADD TO WISHLIST
          </div>
          <div className="item">
            <Balance />
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div></>)}
    </div>
  )
}

export default Product