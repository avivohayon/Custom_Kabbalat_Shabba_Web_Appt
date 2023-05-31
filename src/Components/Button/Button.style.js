import styled from "styled-components"

export const Button = styled.button`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;
    margin-top: 1.2rem;
    width: 144px;
    height: 48px;

    background: #FAA70E;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05), 5px -5px 20px 10px rgba(0, 0, 0, 0.02), -3px -4px 20px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    margin-left: auto;
    margin-right: 2rem;

    background-color: ${({bgc}) => bgc || '#fff'};
    color:${({color}) => color || '#333'};
    background: ${({bg}) => bg || '#FAA70E'};
    font-size: 0.9rem;
    font-weight: bold;
    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;


export const ButtonCustom = styled.button`

        border-radius: 4px;
        background: ${({primary}) => (primary ? '#4b59f7' : '#0467fb') };
        white-space: nowrap;
        padding: ${({big})=> (big ? '12px 64px' : '10px 20px')};
        color: #fff;
        font-size:${({fongBig})=> (fongBig ? '20px' : '16px' )}; 
        outline: none;
        border: none;
        cursor: pointer;

        &:hover {
            transition: all 0.3s ease-out;
            background: #fff;
            ${({primary}) => (primary ? '#0467fb' : '#4b59f7') };
        }

        @media screen and (max-width: 960px){
            width:100%;
            
        }
`
export const ButtonContainer = styled.div`

    /* border: 9px solid yellow; */
`;

