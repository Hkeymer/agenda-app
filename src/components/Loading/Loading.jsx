import React from 'react'
import {VscLoading} from 'react-icons/vsc'
import styles from './styles.module.css'


const Loading = () => {
  return (
     <i style={{ marginTop:"5.5rem"}}>
     <VscLoading 
     className={styles.spinn}
     fontSize={'3.5rem'}
     color='#aaa'
     />
    </i>
  )
}

export default Loading