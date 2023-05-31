import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    

}
`;

export const GlobalBodyContainer = styled.div`
    display: flex;
    height: 80svh;
    background: linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%);
    position: relative;
    justify-content: center;
    align-items: center;
    border: 5px solid red;

`

// export const Container = styled.div`
//     /* z-index:1;
//     width: 100%;
//     max-width: 1300px; */
//     /* push the data to the center */
//     /* margin-right: auto;
//     margin-left: auto;
//     padding-right: 50px; */
//     /* padding-left: 48px; */


//     @media screen and (max-width: 991px){
//         padding-right: 30px;
//         padding-left: 30px;
//     }
// `;


export default GlobalStyle