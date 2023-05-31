import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { MainPageBodyContainer } from './MainPageBody.style'
import storedItems from '../../Data/items.json'
import { StoreItem } from './Store'
import { Outlet ,NavLink, useNavigate} from "react-router-dom"
import { useState } from 'react'
import {savePDFTitle} from '../../ReduxStore/ReduxStore';
import {useDispatch, useSelector} from 'react-redux';

const CreateText = () => {

    const contaierStyle = {
        // width: '892px',
        height: '120px',

        fontFamily: 'Tel Aviv',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '48px',
        lineHeight: '150%',
        /* identical to box height, or 72px */

        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent:'center',
        color: '#0C223D',
        flex: 'none',
        order: 0,
        flexHrow: 0,
        maxWidth:"100%",
        background:" linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%)",
        paddingTop:"4rem",
        paddingBottom:"2rem"
            }

    const [title, setTitle] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const dispatch = useDispatch();
    
    const handleSaveClick = () => {
        dispatch(savePDFTitle({ titleName: title }));
        setIsClicked(true);
    };
  return (
    <>
      
    <Container style={{...contaierStyle, height:"30rem", fontSize:"32px", flexDirection:"column", gap:"3rem", justifyContent:"flex-start"}}>
        <div>
            <label>Give name to your Kabbalat Shabbat </label>
            <h1 style={{fontSize:'2rem'}}>{title? title :'yout title'}</h1>
        </div>
            <div>
            <input
                name='title-name'
                placeholder='{profile.name}'
                onChange={(e) => {
                setTitle(e.target.value)
                }}
            />
            <button onClick={handleSaveClick}
            style={{
                marginLeft:'1rem',
                transition:'background-color 0.3s ease',
                // backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#000',
                fontSize: '1.6rem',
                fontWeight: 'bold',
                padding: '10px 20px',
                borderRadius:'12px',
                border:'shad',
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05), 2px 0px 20px rgba(0, 0, 0, 0.02), 0px 2px 20px rgba(0, 0, 0, 0.02)',
            }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#359BA7'; // Change background color on hover
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = isClicked ? '#8CE0A6' : 'transparent'; // Reset background color on hover out
              }}
            > Save </button>
        </div>
        </Container>
    </>

  )
}

export default CreateText