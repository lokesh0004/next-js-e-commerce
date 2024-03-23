import React from 'react'

const Header = () => {
  return (
  <>
  <div className='h-32 bg-black flex items-center justify-between text-white text-3xl font-bold'>
    <div><h2>WEshop</h2>
    <div><img src='.C:\Users\rajpu\OneDrive\Desktop\project-1\app\components\download.jfif'></img></div>
      </div>
    <div className='text-white font-bold flex items-center gap-3 text-3xl'>
      <h4>About</h4>
      <h4>Carrier</h4>
      <h4>Blog</h4>
      <h4>Account</h4>
      <button type="button" className='bg-slate-100 text-black text-2xl rounded-xl'>Login/signup</button>
    </div>
  </div>
  </>
  )
}

export default Header;
