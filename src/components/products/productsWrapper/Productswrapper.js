import axios from 'axios'
import React, { useEffect, useState } from 'react'
import productsContext from '../../../contexts/productContext'


const Productswrapper = ({children}) => {

    let [data,getdata] = useState([])

    let [cart,changecart] = useState([])

    const addToCart = (prod) =>{
      changecart([...cart,prod])
    }

    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(resp=>getdata(resp.data.products))
        .catch(er=>console.log(er))
    },[])

  return (
    <div>
        <productsContext.Provider value={{data,addToCart,cart}}>
            {children}
        </productsContext.Provider>
    </div>
  )
}

export default Productswrapper