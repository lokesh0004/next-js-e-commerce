import React from 'react'

const Header = () => {
  return (
  <>
  <div className='h-32 bg-black flex items-center justify-between text-white text-3xl font-bold'>
    <h2>WEshop</h2>
    <div className='text-white font-bold flex gap-3 text-3xl'>
      <h4>About</h4>
      <h4>Carrier</h4>
      <h4>Blog</h4>
      <h4>Account</h4>
    </div>
  </div>
  </>
  )
}

export default Header;
