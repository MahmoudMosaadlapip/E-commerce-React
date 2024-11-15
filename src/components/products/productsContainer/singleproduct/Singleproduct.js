/* eslint-disable no-lone-blocks */
import styles from './singleproduct.module.css'
import { Link, useParams } from 'react-router-dom'
import { IoMdStar } from "react-icons/io";
import productsContext from '../../../../contexts/productContext';
import { useContext } from 'react';
<style>
@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>


const Singleproduct = () => {

    const params = useParams()
    let pid = params.id

    const {data} = useContext(productsContext) 

    let starts = []

    const numberofstars = (num)=>{
        starts = []
        {for(let x = 0 ; x < num ; x++)
            {
            starts.push(<IoMdStar />)
            }
        }
}

return (
    <div className={styles.pagee}>
        {
            data?.map((singleproduct)=> singleproduct.id == pid && 
    <div className={styles.singleproduct_container_page} key={singleproduct.id}>
        <div className={styles.singleproduct_container_Header}>
            <h1>{singleproduct.title}</h1>
            <Link to='/products'>Return</Link>
        </div>
        
        <div className={styles.singleproduct_container}>
        <div className={styles.singleproduct_container_product}>
            <div className={styles.singleproduct_images}>
                <div className={styles.singleproduct_images_bigimg}>
                <img src={singleproduct.thumbnail} alt={singleproduct.title}/>
                </div>
                <div className={styles.singleproduct_images_smallimgs}>
                {singleproduct.images?.map((e,idx)=>{if(idx > 0)
                    { return <img src={e} alt={singleproduct.title} key={idx}/>}})}
                </div>
            </div>
            <div className={styles.singleproduct_info}>
            <h1>{singleproduct.title}</h1>
            <p>{singleproduct.price} EGP</p>
            <p>Brand: <span>{singleproduct.brand}</span></p>
            <p>Availability: <span>{singleproduct.availabilityStatus}</span></p>
            <p>{singleproduct.description}</p>
            </div>
        </div>
            
        </div>
        <div className={styles.rev_container}>
            <h1>Our Customers Reviews</h1>
            <p>The Main Target is To make you HAPPY</p>
        <div className={styles.singleproduct_reviews}>
                {
                singleproduct.reviews?.map((r)=><div className={styles.singleproduct_singlereview}>
                    <h3>{r.reviewerName}</h3>
                    <p>{r.reviewerEmail}</p>
                    <p>{r.date}</p>
                    <p>{r.comment}</p>
                    <div className={styles.review_rate}>
                    <p>Rating : {r.rating}</p>
                        <div className={styles.review_star}>
                        {
                            numberofstars(+r.rating)
                        }
                        {
                            starts.map((s)=>s)
                        }
                        </div>
                    </div>
                </div>
                )}
            </div>
    </div>
        </div>
        
)
}
    </div>
)
}

export default Singleproduct