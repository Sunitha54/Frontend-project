import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
    const { getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
      <div className='cartitems'>
          <div className='cartitems-formate-main'>
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
          </div>
          <hr />
          {all_product.map((e) => {
              if (cartItems[e.id]> 0)
            
              {
                  return <div>

                  <div className='cartitems-format cartitems-formate-main'>
                      <img className='carticon-product-icon' src={e.image} alt="" />
                      <p>
                         {e.name}
                      </p>
                          <p>${e.new_price}</p>
                          <button className='cartitems-quentity'>{cartItems[e.id]}</button>
                          <p>${e.new_price*cartItems[e.id]}</p>
                      <img  className='cartitems-remove-icon'src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                  </div>
                  <hr />
              </div>
                  
              }
              return null;

                  
          })}
          <div className='cart-items-total'>
              <h1>total</h1>
              <h2>${getTotalCartAmount()}</h2>
          </div>
          
    </div>
  )
}
