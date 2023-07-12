import React from 'react'
import styles from './styles.module.css'
import { base_url } from '../../App';

const Contactos = ({nombre,telefono,id,setIsLoading,setUpdate}) => {

   const eliminarContacto = async ()=>{
     const delet = await fetch(`${base_url}detele/${id}`, {
      method: 'DELETE'})
      setIsLoading(true);

   }

  return (
    <div className={styles.conten}>
        <h4>{nombre}</h4> 
          <h4> <i>celular</i> : {telefono}</h4>
          <button onClick={eliminarContacto}>Eliminar</button>
    </div>
  )
}

export default Contactos