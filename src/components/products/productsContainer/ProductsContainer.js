import styles from './productscontainer.module.css'
import { Link, useOutletContext } from 'react-router-dom'
import { IoBagAdd } from "react-icons/io5";
import { TfiViewGrid } from "react-icons/tfi";
import productsContext from '../../../contexts/productContext';
import { useContext } from 'react';

const ProductsContainer = (props) => {

    let search = useOutletContext()

    const {addToCart} = useContext(productsContext) 
    

return (
    <section className={styles.products_data_section}>
        <h1>OUR PRODUCTS</h1>
        <div className={styles.products_container}>
            {
                props?.data?.filter((q)=>q.title.includes(search)).map((p)=>
                    <div className={styles.Product_card} key={p.id}>
                    <img src={p.thumbnail} alt=''></img>
                    <h1>{p.title}</h1>
                    <p>{p.description}</p>
                    <h3>{p.price} EGP</h3>
                    <div className={styles.viewcart}>
                    <button onClick={()=>addToCart(p)}><IoBagAdd /></button>
                    <Link to={`/products/${p.id}`}><TfiViewGrid/></Link>
                    </div>

                    </div>

                )
            }
        </div>

    </section>
)
}

export default ProductsContainer