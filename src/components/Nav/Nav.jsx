import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { base_url } from '../../App'

const Nav = ({update}) => {


   const [cantidad, setCantidad] = useState(0)

   useEffect(() => {

     const get = ()=> fetch(`${base_url}cantidad`)
     .then(res=>res.json())
     .then(data=>setCantidad(data[0].cantidad))
     .catch(err=>console.log(err))
    
     get()

     return () => {
       get()
     }

   },[update])
   

  return (
  <nav className={styles.conten}>
    <h1>Contactos  <span> Total {cantidad} </span> </h1>
  </nav>
  )
}

export default Nav