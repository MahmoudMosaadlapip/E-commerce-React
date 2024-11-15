import React from 'react'
import styles from './products.module.css'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'

const Products = () => {

    const [search,setSearch] = useState('')

return (
    <section className={styles.product_section_container}>
        <div className={styles.products_Container}>
        <div className={styles.products_links}>
            <Link to=''>ALL</Link>
            <Link to='beauty'>Beauty</Link>
            <Link to='Food'>Food</Link>
            <Link to='Furniture'>Furniture</Link>
        </div>

        <div className={styles.inp_search}>
            <form>
                <input type='search' placeholder='Search for a product' onChange={(e)=>setSearch(e.target.value)}></input>
            </form>
        </div>
        </div>
        <Outlet context={search} />   
        
    </section>
)
}

export default Products