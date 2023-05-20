import React from 'react'

const style={
    nav: `bg-gray-800 h-20 flex justify items-center`,
    heading: `text-white text-3xl`
}

const Navbar = () => {
  return (
<div className={style.nav}>
    <h1 className={style.heading}>Chat App</h1>
</div>
  )
}

export default Navbar