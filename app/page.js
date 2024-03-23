import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Stepper from "./components/Stepper.js"
import Header from "./components/Header.js"
import Cards from "./components/Cards.js"
import Footer from "./components/Footer.js"
// import First from "../public/images/First.jpg"

const page = () => {
  return (
    <>
    <Header/>
    <Stepper/>
    <div className='flex flex gap-6 justify-between ml-28 mr-28'>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
    <div className='flex flex gap-6 justify-between mt-11 ml-28 mr-28 '>
    <Cards/>
    <Cards/>
    <Cards/>
    </div>
    <div className='mt-36'>
    <Footer/>
    </div>
    </>
  )
}

export default page
