import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import GeneratePDF from './GeneratePDF'
import { Container } from 'react-bootstrap';
import {ImageCartContext} from '../Context/ImageCartContext'
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist";


const PageScreenPDF = () => {
    const userData = useSelector((state) => state.userInfo.value)
    console.log('PageScreenPDF userData title now is: ', userData.titleName )
    const title = userData.titleName;
    const testImgUrl = userData.imgUrls;
    const tamplateID = userData.tamplateConfig;



  return (
    
    <>

    <Container>
      

        <GeneratePDF title = {title}  imgURL= {testImgUrl}  tamplateID={tamplateID}/>

    </Container>
    </>

  )
}

export default PageScreenPDF