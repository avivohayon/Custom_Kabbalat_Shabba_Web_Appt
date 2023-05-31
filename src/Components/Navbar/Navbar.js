import React , {useState, useEffect}from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.style'
import { Button, ButtonContainer } from '../Button/Button.style'
import logo from '../../asset/images/HomeScreen/homeLogo.png'

const Navbar = () => {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)


  //see again the hole button shit in min 50
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true)
    }
  }
  useEffect( () => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);
  return (
    <>
    <IconContext.Provider value={{color: 'blue'}}>
      <Nav>
           <NavbarContainer>

                
              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars /> }
              </MobileIcon>
              <NavMenu onClick={handleClick} click={click}>
              <NavLogo to='/'>
                <NavIcon style={{marginTop:'10px'}} src={logo} alt=''/>
              </NavLogo>
                <NavItem >
                  <NavLinks to='/'>Home</NavLinks> 
                </NavItem>
                <NavItem>

                  <NavLinks to='/about?'>about</NavLinks> 
                </NavItem>
             
                <NavItem>
                  <NavLinks to='/create-ceremony'>create a ceremony</NavLinks> 
                </NavItem>

                <NavItem>
                  <NavLinks to='/login'> Login</NavLinks>
                </NavItem>
                <ButtonContainer>
                  <Button> for donation </Button>
                </ButtonContainer>
              </NavMenu>

       
    
        </NavbarContainer> 
      </Nav>
    </IconContext.Provider>
    </>

  )
}

export default Navbar