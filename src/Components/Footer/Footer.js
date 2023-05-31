import React, { useState } from 'react'
import { FooterContainer, FooterColumn , FooterItem,FooterLink, AnchorImg, HomeImage, RightColumContainer, 
Paragraph, Image, LastImageContainer} from './Footer.style'
import habit2 from '../../asset/images/Footer/habait2.png'
// '.../../asset/images/Footer/habait2.png' 
import piggy from '../../asset/images/Footer/piggy.png'
import tmura_logo from '../../asset/images/Footer/tmura_logo.png' 
import max_logo from '../../asset/images/Footer/max_logo.png'
import Up_arrow from  '../../asset/images/Footer/Up_arrow.png' 

const Footer = () => {

  const [anchor, setAnchor] = useState(false);

  const handleAnchor = () =>{
    setAnchor(false)
  }


  return (
    <FooterContainer>
      <FooterColumn>
        <FooterItem>
          <FooterLink to='/Facebook' size='small'  flex_direction='left'> Facebook</FooterLink>
          <FooterLink to='/Twitter' size='small'  flex_direction='left'> Twitter</FooterLink>
          <FooterLink to='/LinkedIn' size='small'  flex_direction='left'> LinkedIn</FooterLink>
          <FooterLink to='/Instagram' size='small'  flex_direction='left'> Instagram</FooterLink>
        </FooterItem>

        <FooterItem>
          <FooterLink size='small'> 
          <p>+972-3-5612312</p>
          </FooterLink>

          <FooterLink size='small'> 
            <p>HABIT@SECULAR.COM</p>
          </FooterLink>
        </FooterItem>
        <FooterItem height='height'/>
     
        <FooterItem>

          <AnchorImg 
            src={Up_arrow}
            alt = ''
          />
        </FooterItem>
        <FooterItem>
          &copy;MAXIMPACT&TMURA&SH-2023
        </FooterItem>
        
        {/* <FooterItem>

        </FooterItem> */}
      
      </FooterColumn>
      <FooterColumn>
        <FooterItem>
          <FooterLink  to='/' size='medium' position ='center'>Your path to Judaism begins</FooterLink>
          <FooterLink  to='/' size='large' position ='center'>HERE</FooterLink>
          <FooterLink  to='/' size='small' position ='center'>home screen</FooterLink>
          <FooterLink  to='/about' size='small' position ='center'>about</FooterLink>
          <FooterLink  to='/sing-up' size='small' position ='center'>sing up / log in</FooterLink>
          <FooterLink  to='/my-accunt' size='small' position ='center'>my accunt</FooterLink>
          <FooterLink  to='/donation' size='small' position ='center'>for donation</FooterLink>
          <FooterLink  to='/create-ceremony' size='small' position ='center'>create text</FooterLink>


       
       </FooterItem>

      
      </FooterColumn>



      <FooterColumn>
        <RightColumContainer>
          <HomeImage 
              src={habit2}
              alt = ''
            />
            
        </RightColumContainer>
        <FooterItem height='height'/>
  
        <Paragraph size='small'>
          <Image src ={piggy}/>
          <p>help us grow</p>
        </Paragraph>
        
        <FooterItem>
          <LastImageContainer>
          <HomeImage src={tmura_logo} alt=''/>
          <HomeImage src={max_logo} alt=''/>
        </LastImageContainer>
        </FooterItem>
      </FooterColumn>
        
     
    </FooterContainer>
  )
}

export default Footer

