import React, { useContext } from 'react'
import styles from './cart.module.css'
import { Link } from 'react-router-dom'
import productsContext from '../../../contexts/productContext'
import { CiCircleRemove } from "react-icons/ci";


const Cart = () => {

  const {cart} = useContext(productsContext)

  return (
    <section className={styles.cart_page}>
        <div className={styles.cart_container}>
          {
            cart?.length === 0 ?  <div className={styles.noproduct}><p>Your cart is currently empty.<br/><span>Continue browsing <Link to='/products'>here</Link></span> </p></div>
            :            
            cart.map((p)=><div className={styles.singleproduct_info}>
            <img src={p.thumbnail} alt=''></img>  
            <h1>{p.title}</h1>
            <p>{p.price} EGP</p>
            <p>Brand: <span>{p.brand}</span></p>
            <p>Availability: <span>{p.availabilityStatus}</span></p>
            <p>{p.description}</p>
            <button>Remove from cart</button>
            </div>) 
          }
        </div>
    </section>
  )
}

export default Cart