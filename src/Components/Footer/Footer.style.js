import styled , {css}from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background: #EFD6A7;
  /* padding: 4rem 0 2rem 0; */
  display: flex;
  position: relative;
  height: 70.58svh;
  /* border: 9px solid black; */
`;

export const FooterColumn = styled.div`
  background: transparent;
  display: flex;
  /* position: absolute; */
  flex-direction: column;
  /* border: 9px solid blue; */
  flex-grow:1 ;
  /* set different flex values for the columns */
  &:nth-child(2) {
    flex: 1.8;
    justify-content: flex-start; 
    align-items: center; 
  }

  &:not(:nth-child(2)) {
    flex: 1;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625;
  /* height: 80px; */
  /* border: 2px solid brown; */
  padding-top: 2rem;
  background: none;
  /* max-height: 100vh; */
  /* flex-wrap: wrap; */
  height: ${({height}) => (height) ? '20svh': ""};
  
  
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border:none;
    }
  }

  /* Add gap property to control spacing between links */
  & > p {
    flex-shrink: 1;
    font-size:  ${({size}) => fontSizes[size] || fontSizes.medium};
    /* padding-bottom: 0.8rem; */
    padding:0rem 6.7226svh;
    direction: rtl;
    font-size:2rem;
  }


`;



const fontSizes = {
  small: '2.521svh',
  medium: '4.481svh',
  large: '6.72svh',
};

export const FooterLink = styled(Link)`
  /* border: 3px solid purple; */
  color: #1352CB;
  display: flex;
  flex-direction: ${({flex_direction}) => (flex_direction ==='right' ?  'row-reverse' : 'row')};
  align-items: flex-start;
  text-decoration:none;
  padding: 0rem 6.7226svh;
  height: 40%;
  position: relative;
  /* top :20px; */
  font-size:  ${({size}) => fontSizes[size] || fontSizes.medium};
  justify-content: ${({position}) => (position ? 'center': 'flex-start')};

  @media screen and (max-width: 960px){
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
      background-color: transparent;
  }
  &:hover {
      cursor: pointer;
      color: #22BE60;
      transition: all 0.3s ease;
  }

  & > div,
  & > ul,
  & > p {
    flex-shrink: 1;
    font-size:  ${({size}) => fontSizes[size] || fontSizes.medium};
    flex-direction: ${({flex_direction}) => (flex_direction ==='right' ?  'row-reverse' : 'row')};
    padding-bottom: 0.8rem;

  }
`;



export const AnchorImg = styled.img`


width: 7svh;
height: 7svh;

box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05), 2px 0px 20px rgba(0, 0, 0, 0.02), 0px 2px 20px rgba(0, 0, 0, 0.02);
border-radius: 20px;
position: relative;
/* border: 3px solid purple; */
margin-left: auto;
margin-left: 3rem;



 
  @media (max-width: 900px) {
    flex-wrap: wrap;
    /* display: flex; */
    flex-direction: column;
    width: 60%;
    height: 100%;
    right: 0;
    margin-top: 15%;
    margin-bottom: 15%;

  }
`


export const HomeImage = styled.img`

display: flex;
width: 16svh;
height: 8svh;
/* justify-content: center; */
/* box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05), 2px 0px 20px rgba(0, 0, 0, 0.02), 0px 2px 20px rgba(0, 0, 0, 0.02); */
border-radius: 20px;
position: relative;
/* border: 3px solid green; */
margin-left: auto;
padding-right: 2rem;


////////////


 
  @media (max-width: 900px) {
    flex-wrap: wrap;
    /* display: flex; */
    flex-direction: column;
    width: 60%;
    height: 100%;
    right: 0;
    margin-top: 15%;
    margin-bottom: 15%;

  }
`
export const LeftFooterData = styled.p`
  background-color: 9px solid orange;
  display: flex;
  font-size:  ${({size}) => fontSizes[size] | fontSizes.medium};
`;


export const RightColumContainer = styled.div`
  display: flex;
  flex-direction: row;
`;



export const Paragraph = styled.p`
  display: flex;
  align-items: center;
  /* direction: rtl; */
  color: #1352CB;
  /* align-items: flex-start; */
  text-decoration:none;
  padding: 0rem 6.7226svh;
  height: 20%;
  position: relative;
  /* top :20px; */
  font-size:  ${({size}) => fontSizes[size] || fontSizes.medium};

  
  
`;

export const Image = styled.img`
  margin-right: 5rem;
  margin-left: 9rem;
  
  height: 6rem;
  width: 3rem;
`;

export const LastImageContainer = styled.div`
display: flex;
flex-direction: row-reverse;

`;

