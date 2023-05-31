import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
// import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet  } from "react-router-dom";
import { HomePageBody,
         CreateText,
         PageScreenPDF,
         ChooseTemplate
  } from "./Components";


import RootLayout from "./Components/Layout/RootLayout";
import ModrenPoems from "./Components/MainPageBody/ModrenPoems";
import Holidays from "./Components/MainPageBody/Holidays";
import BibleText from "./Components/MainPageBody/BibleText";


import "bootstrap/dist/css/bootstrap.min.css"
import { ImageCartProvider } from "./Components/Context/ImageCartContext";
import MainPageLayout from "./Components/Layout/MainPageLayout";


import { PDFDownloadLink } from "@react-pdf/renderer";
import { ViewPdf,InputForm, PDFgenerator2  } from "./Components/PDFgenerator/PdfGenerator";
// store broweser information usuing Redux
import {Provider} from 'react-redux'
import {store} from './ReduxStore/ReduxStore'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './ReduxStore/ReduxStore';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path = '/' element ={<RootLayout />}>
      <Route index element={<HomePageBody />} />
      

      <Route path='/create-ceremony' element={<MainPageLayout />} >
        {/* <Route element={<MainPageBody />}> */}

        <Route path='' element = {<CreateText />} />
          <Route path='tampelate' element = {<ChooseTemplate />} />

        
          <Route path ='bible' element={<BibleText/>}/>
          <Route path ='modren-poems' element={<ModrenPoems />}/>
          <Route path ='holidays'element={<Holidays />} />
          <Route path ='custom-pdf'element={<PageScreenPDF />} />




      </Route>



    </Route>

  
  )
)

function App() {



  let Components
  console.log(window.location)


  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>

    <ImageCartProvider>

       <RouterProvider router={router} />

    </ImageCartProvider>
    </PersistGate>

    </Provider>

  );
}



export default App;


  
