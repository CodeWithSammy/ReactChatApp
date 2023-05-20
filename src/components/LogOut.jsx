import React from 'react'
import{auth} from '../firebase'

const style={
    button: `bg-gray-200 px-4 py-2 hover:bg-red-300`
}
const LogOut = () => {
const signOut=()=>{
    signOut(auth)
}
  return (
    <button onClick={()=>auth.signOut()} className={style.button}>LogOut</button>
  )
}

export default LogOut