"use client"
import React from 'react'

const Header = () => {
  return (
  <>
  <div className='h-56 bg-black flex items-center justify-between font-sans text-white text-3xl font-bold'>
    <div><h2>Weshop</h2>
    <div><img src=""></img></div>
      </div>
    <div className='text-white font-bold font-sans flex items-center gap-3 text-3xl'>
      <h3>About</h3>
      <h3>Carrier</h3>
      <h3>Blog</h3>
      <h3>Account</h3>
      <button type="button" className='bg-slate-50 hover:bg-slate-300 ml-2 p-2 w-20.5 mr-3 font-sans text-black text-2xl rounded-3xl'>Login/signup</button>
    </div>
  </div>
  </>
  )
}

export default Header;
