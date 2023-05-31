import { Outlet ,NavLink} from "react-router-dom"
import { Button, Container,Nav,Navbar as NavbarBS} from "react-bootstrap"
import {ImageCartProvider, useImageCart} from '../Context/ImageCartContext'

import './SubNavbar.css'

import {useDispatch, useSelector} from 'react-redux';
import { saveImageUrl } from "../../ReduxStore/ReduxStore";
import storedItems from '../../Data/items.json';
import { useState } from "react"


const SubNavbar = () => {
  const {openCart, cartQuantity, cartItems} = useImageCart()
  const [isClicked, setIsClicked] = useState(false);

  const dispach = useDispatch();
  const titleName= useSelector((state) => state.userInfo.value.titleName);



      //helper function of the saveImghandler
      const getImageUrlById = (id) => {
        const item = storedItems.find ((item) => item.id === id)
        return item ? item.imgUrl : null;
    }
    //handler to save the images after clicking the button
    const saveImghandler = (e) => {
        e.target.style.color ='black'

        const imageUrls = cartItems.flatMap((item) => 
        Array.from({length: item.quantity }, () => getImageUrlById(item.id)));
        console.log('lilili: ', imageUrls)
        dispach(saveImageUrl(imageUrls))
        setIsClicked(true)

    };
  
  return (
    <NavbarBS 
      style={{background: "linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%)",
      maxWidth: "100%",
      paddingBottom:"2rem",
      display:'flex',
      justifyContent:'center',
    }}>
      <Container className="container"
      style={{display:"flex", justifyContent:"center" ,paddingTop:"20px", paddingBottom:"20px", maxHeight:"100%", maxWidth:'100%', marginBottom:'2rem'}}>
      <Button style={{
        marginBottom:"2rem",
        marginRight:'8rem',
        width: "125px", 
        objectFit:"cover",
        boxShadow: `0px 2px 10px rgba(0, 0, 0, 0.05), 5px -5px 20px 10px rgba(0, 0, 0, 0.02), -3px -4px 20px 10px rgba(0, 0, 0, 0.05)`,
        borderRadius: `8px`,
        background: '#1352CB',
        color:'white',
        marginTop:'2rem',
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#359BA7'; // Change background color on hover
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = isClicked ? '#8CE0A6' : '#1352CB'; // Reset background color on hover out
        }}
        onClick={saveImghandler}
        >Save !
        </Button>
        <Nav className="nav"
        style={{    
        //   marginRight:'2rem',
        // marginLeft:"8rem",
         gap:"10rem"
         }}>
          <Nav.Link to = 'modren-poems' as={NavLink} className="nav-link">
          Modren poems
          </Nav.Link>
          <Nav.Link to = 'bible' as={NavLink} className="nav-link">
          bible
          </Nav.Link>
          <Nav.Link to = 'holidays' as={NavLink} className="nav-link" >
          holidays
          </Nav.Link>
        </Nav>
        <Button 
        variant='outline-primary'
        onClick={openCart}
        style={{
        width:"8rem",
        height:"3rem",
        direction:"rtl",
        borderRadius:'10px' ,
        border:' 2px solid #FAA70E',
        color:'#FAA70E',
        
        position:"relative",
        marginLeft:'8rem'
        // marginRight:'8rem',

        }}>
          <span style={{ display: 'flex', alignItems: 'center' , justifyContent:"space-between" }}>
            Watch
          <img src='./images/Utilites/icons8-eye-24.png' alt="" style={{ marginLeft: '20px' }} />
          </span>
          <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
          style={{
          color: "white",
          width: "1.5rem",
          height: "1.5rem",
          top:'22',
          bottom:"",
          transform:"translate(55%, -15%)",
          position:"absolute"
          }}
          >
          {cartQuantity}
          </div>
  
        </Button>
  


      </Container>
    </NavbarBS>


  )
}

export default SubNavbar

