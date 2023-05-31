import styled from 'styled-components'

export const HomeBodyContainer = styled.div`
    display: flex;
    height: 80svh;
    background: linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%);
    position: relative;
    justify-content: center;
    align-items: center;
    padding-top: 30px;

`

export const HomeBodyImg = styled.img`
  /* border: 9px solid blue; */
  top: 0;
  bottom: 0;
  max-height: 100%;
  display: flex;
  align-self: center;
  height: 100svh;
    @media screen and (max-width: 900px) {
        width: 100%;
        height: 100%;
        right: 0;
        margin: auto;
    }

`

export const BodyText = styled.div`
display: flex;
height: 12rem;
background: linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%);
position: relative;
padding-bottom: '2px';


font-family: 'Tel Aviv';
font-style: normal;
font-weight: bold;
font-size: 3rem;
line-height: 150%;
/* identical to box height, or 48px */

align-items: center;
justify-content: center;
padding-right: 3%;
padding-top: 7%;

color: #0C223D;
/* border: 9px solid black; */
position: relative;
flex-direction: row;
`

export const HomeBodyBot = styled.div`

    display: flex;
    /* display: block; */
    width: 100%;
    height: 650px;
    background: linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%);
    position: relative;
    justify-content: center;
    align-items: center;
    /* border: 9px solid pink; */
    gap: 15rem ;
    flex-wrap: wrap;
      @media (max-width: 900px) {
      display: flex;
      /* flex:0; */


      /* display: flex; */
      flex-direction: column;
      width: 100%;
      height: 100%;
      right: 0;
      margin: auto;
      gap:0;
    }


`



export const ClickableImages = styled.img`


width: 40svh;
height: 40svh;

background: #EEF1F4;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05), 2px 0px 20px rgba(0, 0, 0, 0.02), 0px 2px 20px rgba(0, 0, 0, 0.02);
border-radius: 12px;
position: relative;
/* border: 9px solid purple; */
 
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

`;