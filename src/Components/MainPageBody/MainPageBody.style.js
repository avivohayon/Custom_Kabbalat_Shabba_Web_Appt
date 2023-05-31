import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const fontSizes = {
    small: '2.521svh',
    medium: '4.481svh',
    large: '6.72svh',
  };
export const MainPageTitle = styled.p`
    border: 5px solid yellow;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    text-decoration:none;
    background: linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%);
    padding: 0rem 6.7226svh;
    height: 20%;
    position: relative;
    font-size:  ${({size}) => fontSizes[size] || fontSizes.medium};
    padding-top: 1rem;



`;

export const Options = styled.div`
    border: 5px solid purple;

    display: flex;
    /* height: 80svh; */
    background: linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%);
    position: relative;
    justify-content: center;
    align-items: center;
    direction: rtl;
    flex-wrap: wrap;
    gap:3rem;
    font-size: 1.5rem;
    font-weight: bold;
    /* padding-top: 3.75rem; */
    padding-bottom: 1rem;
    padding-left: 30%;
    @media screen and (max-width: 960px){

        gap:1rem;
        
    }

`

export const OptionsNavLinks = styled(NavLink)`
    border: 9px solid green;

    display:flex ;

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 1rem;
        width: 100%;
        display: table;
        background-color: transparent;
        
    }
    &:hover {
        cursor: pointer;

        color: #22BE60;
        
        transition: all 0.3s ease;


    }
`


export const TitleContainer = styled.div`
    background: linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%);
    border: 5px solid green;

`;

export const MainPageBodyContainer = styled.div`
    display: flex;
    height: 90svh;
    background: linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%);
    position: relative;
    /* justify-content: center;
    align-items: center; */
    border: 5px solid red;


`

    /* & > nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    padding: 0 5px;
    border: 5px solid pink;
  } */

  /* @media screen and (max-width: 960px) {
    font-size: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      overflow-x: auto;
    }

    a {
      padding: 0 5px;
      white-space: nowrap;

    }

    a+a {
      margin: 5px;
      flex: 1 1 100%;
      text-align: center;
      border: 2px solid black;

    } */