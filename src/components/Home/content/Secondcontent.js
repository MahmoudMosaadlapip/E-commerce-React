import React from 'react'
import styles from './secondcontent.module.css'

const Secondcontent = (props) => {

  return (
    <section className={styles.secontainer}>
        <div className={styles.info}>
        <img src={props.data.img} alt=''/>
        <div className={styles.txt}>
        <h1>{props.data.txt}</h1>
        <p>{props.data.desc}</p>
        </div>
        
        </div>
    </section>
    
  )
}

export default Secondcontent