import React from 'react'
import styles from './notfound.module.css'
const Notfound = () => {
  return (
    <section className={styles.pagenotfound}>
        <div className={styles.pagecontainer}>
            <img src='https://i.ytimg.com/vi/HvKb-DIfybo/maxresdefault.jpg' alt='sad' />
            <h1>404</h1>
            <p>PAGE NOT FOUND</p>
        </div>
    </section>
  )
}

export default Notfound