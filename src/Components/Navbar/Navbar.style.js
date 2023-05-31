import styled from 'styled-components'
// import { Container } from '../../globalStyle';
import {Link} from 'react-router-dom'
import {x} from 'react-icons'

export const Nav = styled.nav`
    
    height: 10svh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.2rem;
    z-index: 999;

    background: linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%);
    /* border:5px solid black; */
    /* to make the header sticky but only till we reach the top of the screen and then its disapper */
    position: sticky;
    /* top:0; */
    /* position: relative; */

    
`;

export const NavbarContainer = styled.div`
    display: flex;
    position: absolute;
    height: 100%;
    width:100% ;
    /* border: 3px solid purple; */
    /* flex-shrink: 1; */
    align-items: center;
    justify-content: center;
    


    /* retrive other valuse from the Container */
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 100%;
        right: 0;
        margin: auto;
    }

`;


export const NavLogo = styled(Link)`
    /* margin-left: auto; */
    cursor: pointer;
    display: flex;
    /* align-items: center; */
    /* border: 10px solid blue; */
    /* margin-right: 50px;
    margin-left: auto; */
    
`;


export const NavIcon = styled.img`

    /* margin-left:100px; */
    /* margin-left: auto; */
`

export const MobileIcon = styled.div`

    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }

`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    text-align: center;
    /* border: 10px solid firebrick; */
    flex-grow: 1;
    padding-left: 5rem;
    padding-right: 5rem;
    font-size: 2rem;
    font-weight: bold;


    /* margin-left: 3rem;

    margin-right: 3rem; */
    

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        width: 100%;
        height: 90vh;
        position: absolute;
        top:80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background-color: #ADD8E6;
        margin-left: 0;
        margin-right: 0;
   
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;
    padding-bottom: 30px;
    background: none;
    
    


    @media screen and (max-width: 960px) {
        width: 100%;
        &:hover {
            border:none;
        }
}

`;

export const NavLinks = styled(Link)`
    color: #1352CB;
    display: flex;
    align-items: center;
    text-decoration:none;
    padding: 0.5rem 1rem;
    height: 100%;
    /* background: yellow; */
    /* background-color: pink; */
    justify-content: auto;
    align-items: baseline;
    /* move the position of the header tabs */
    position: relative;
    top :20px;
    /* border-bottom: 2px solid black; */

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

`