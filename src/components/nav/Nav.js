import React, { useContext, useState } from 'react'
import styles from './nav.module.css'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { Link }  from 'react-router-dom'
import productsContext from '../../contexts/productContext';

const Nav = () => {

    const [navState,setnavstate] = useState(false)

    const {cart} = useContext(productsContext)

  return (
    <nav className={styles.navi}>
        <div className={styles.navContainer}>

        <div className={styles.navLogo}>
            <p>LOGO</p>
        </div>

        <div className={`${styles.navLinks} ${styles.pullUp} ${ navState && styles.hide} }`}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/cart'>cart</NavLink>
        </div>

        <div className={styles.cart}>
        <Link to='/cart'><FaCartShopping /></Link>
        <span>{cart.length}</span>
        </div>

        <div className={styles.navToggler} onClick={()=>setnavstate(!navState)}>
            <GiHamburgerMenu />
        </div>
            
        </div>

    </nav>
  )
}

export default Nav