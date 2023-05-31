import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Router, Outlet } from 'react-router-dom'
import {GlobalStyle} from '../../globalStyle'


const RootLayout = () => {
  return (
    <>
        
        <GlobalStyle />
        <Navbar />

        <Outlet />
        <Footer />

    </>


  )
}

export default RootLayout