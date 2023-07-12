import React, { useState } from 'react'
import styles from './styles.module.css'
import { base_url } from '../../App';

const Form = ({setUpdate,setIsLoading}) => {

  const [form, setForm] = useState({
        nombre:'',
        telefono:''
  })

  const handlesSubmit = (e)=>{
      
      e.preventDefault();
  
      fetch(`${base_url}agregar/${form.nombre}/${form.telefono}`,
       { method: 'POST'})
      
      setUpdate(true)
      setIsLoading(true)
      
      setForm({
        nombre:'',
        telefono:''
      })
  }

  return (
    <form className={styles.conten} 
       onSubmit={handlesSubmit}>
        <div className={styles.conten_div}>
       <label>Nombre</label>
       <input type='text' 
        name='nombre'
        onChange={e=>setForm({...form,nombre:e.target.value})}
        required
        value={form?.nombre}
        />
       </div>
        <div className={styles.conten_div} >
        <label>Telefono</label>
       <input type='text'
        onChange={e=>setForm({...form,telefono:e.target.value})}
        name='telefono'
        required
        value={form?.telefono}
        />
        </div>
       <button type="submit">Agregar nuevo contacto</button>
    </form>
  )
}

export default Form