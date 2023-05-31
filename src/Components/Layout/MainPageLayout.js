import React from 'react'


import { Outlet , useNavigate, useLocation} from "react-router-dom"

import { Container,Nav,Navbar as NavbarBS} from "react-bootstrap"

import {SubNavbar,} from '../../Components'
import {useSelector} from 'react-redux';

const MainPageLayout = () => {

  const contaierStyle = {
    height: '120px',
    fontFamily: 'Tel Aviv',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '48px',
    lineHeight: '150%',
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
  
  const buttunStyle = {
      padding: `0px 24px 0px 16px`,
      width: '9rem',
      height: '3rem',
      color: 'white',    
      background: '#1352CB',
      boxShadow: `0px 2px 10px rgba(0, 0, 0, 0.05), 5px -5px 20px 10px rgba(0, 0, 0, 0.02), -3px -4px 20px 10px rgba(0, 0, 0, 0.05)`,
      borderRadius: `8px`,
      flexGrow: '0'
      }

    const navigate = useNavigate()
    const location = useLocation();

    const isCreateCeremonyPath = location.pathname.startsWith('/create-ceremony');
    const isChooseTampelatePath = location.pathname.includes('/create-ceremony/tampelate')
    const isSubNavbarActive = location.pathname.includes('/create-ceremony/bible') ||
    location.pathname.includes('/create-ceremony/modren-poems') ||
    location.pathname.includes('/create-ceremony/holidays');
    const isCreatePDFPath = location.pathname.includes('/create-ceremony/custom-pdf');
    
    const handleNext = (destination) => {

          navigate(`/create-ceremony/${destination}`);
        };

    const handlePrevious = (destination) => {
          navigate(`/create-ceremony/${destination}`);
        };

    const savedURLs = useSelector((state) => state.userInfo.value.imgUrls)

  return (
  <>
     <Container style={{...contaierStyle, height:"10rem"}}>
        Create you OWN custom Kabbalat Shabbat

      </Container>
  
      {isSubNavbarActive && <SubNavbar />}
      <Container 
        style={{maxWidth:"100%", background:" linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%)", 
         }}>
        <Outlet />
      
      </Container>


      {/* contorl next, prev buttons navigation */}
      {/* next page navigation button container*/}
        {isCreateCeremonyPath &&  !isChooseTampelatePath && !isSubNavbarActive && !isCreatePDFPath &&  (
        <Container
          style={{
            ...contaierStyle,
            height: '30rem',
            fontSize: '32px',
            flexDirection: 'column',
            gap: '3rem',
            justifyContent: 'flex-start',
          }}
        >
          <button style={buttunStyle} onClick={() => handleNext('tampelate')}>Next</button>
        </Container>
      )}
      {isChooseTampelatePath &&(

        <Container
          style={{
            ...contaierStyle,
            height: '30rem',
            fontSize: '32px',
            flexDirection: 'column',
            gap: '3rem',
            justifyContent: 'flex-start',
          }}
        >
          <div style={{display:'flex', flexDirection:'row', gap:"2.5rem" }}>
          <button style={{...buttunStyle, color:'#1352CB', background:"white"}} onClick={() => handlePrevious('')}>Previous</button>
          <button style={buttunStyle} onClick={() => handleNext('bible')}>Next  </button>
          </div>

        </Container>
        
      )}
        {isSubNavbarActive &&    (
        <Container
          style={{
            ...contaierStyle,
            height: '30rem',
            fontSize: '32px',
            flexDirection: 'column',
            gap: '3rem',
            justifyContent: 'flex-start',
          }}
        >
          <div style={{display:'flex', flexDirection:'row', gap:"2.5rem" }}>
          <button style={{...buttunStyle, color:'#1352CB', background:"white"}} onClick={() => handlePrevious('tampelate')}>Previous</button>
          <button style={buttunStyle} onClick={() => handleNext('custom-pdf')}>Next  </button>
          </div>

        </Container>
        
      )}
      {isCreatePDFPath && (
         <Container
         style={{
           ...contaierStyle,
           height: '30rem',
           fontSize: '32px',
           flexDirection: 'column',
           gap: '3rem',
           justifyContent: 'flex-start',
         }}
       >
         <div style={{display:'flex', flexDirection:'row', gap:"2.5rem" }}>
         <button style={{...buttunStyle, color:'#1352CB', background:"white"}} onClick={() => handlePrevious('bible')}>Previous</button>
         </div>

       </Container>
      )
      }
  </>

  )
  
}

export default MainPageLayout
