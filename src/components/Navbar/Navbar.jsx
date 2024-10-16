import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import './Navbar.scss'
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import Search from '../Search/Search'

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const products = useSelector(state=>state.cart.products)
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/4">Shoes</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/5">Accessories</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/6">Watches</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">FashionHub</Link>
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon 
              onClick={() => setShowSearch(true)}
              className='searchIcon'
            />
            <div className="cartIcon" onClick={() => {setOpen(!open)}}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart open={open} setOpen={setOpen}/>}
      {showSearch && <Search setShowSearch={setShowSearch}/>}
    </div>
  );
}

export default Navbar