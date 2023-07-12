import './App.css';
import {useEffect,useState} from 'react'
import Nav from './components/Nav/Nav';
import Form from './components/Form/Form';
import Contactos from './components/Contactos/Contactos';
import Loading from './components/Loading/Loading';

// export const base_url = 'http://localhost:5000/api/'
export const base_url = 'https://api-contactos.onrender.com/api/'


function App() {
 
  const [contactos, setContactos] = useState([])
  const [update, setUpdate] = useState(false)
  const [isloading, setIsLoading] = useState(false)


   useEffect(() => {

    const get = async () => {
     
     const date = await fetch(`${base_url}contactos`)
      .then(res=>res.json())
      .then(data=>{
        setContactos(data)
        setIsLoading(false)
      })
      .catch(err=>console.log(err))
       setUpdate(false)
    }

    get() 

   return ()=> get()
     
 },[update,isloading])


 
  return (
    <div className="app">
      <Nav update={update}/>
      <div className="app_container">
      <Form 
       setUpdate={setUpdate}
      setIsLoading={setIsLoading}
      />
      <div className="app_container_contactos" >
      {isloading?<Loading/>:
      contactos.map(d=><Contactos
      key={d.id}
      nombre={d.nombre}
      telefono={d.telefono}
      id={d.id}
      setIsLoading={setIsLoading}
      />)}
      </div>
      </div>
    </div>
  );
}

export default App;
