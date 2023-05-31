import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux';
import tempelate from '../../Data/tampelate.json'
import TampelateCards from '../PDFgenerator/TampelateCards'

const ChooseTemplate = () => {

    return (
        <>
    
        <Container 
            style={{background: "linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%)",
            maxWidth: "100%",
            display:'flex',
            flexDirection:'column',
            // justifyContent:'center',
            
                paddingBottom:"5rem",
                }}
            >
         <Container style={{justifyContent:'center', paddingBottom:'10px'}}>
         <h1 style={{fontSize: "2rem"}}>Choose your tampelate</h1>
         </Container>
        <Container 
            style={{maxWidth: "180svh",
            }}
         >
   

            <Row md={2} xs={1} lg={3}
            className='g-4'
            style={{
                display:'flex',
                justifyContent:"space-between",
                margin:'auto',                   


            }}
             >
                
            {tempelate
            .map(item => (
                <Col
                style={{
                    direction:'flex',
                    box: 'border-box',
                    background: 'linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%)',
                    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05), 2px 0px 20px rgba(0, 0, 0, 0.02), 0px 2px 20px rgba(0, 0, 0, 0.02)',
                    borderRadius: '12px',
                    border:'2px solid #DCE2F1',




                

                }}
                key={item.id}
                >
                <TampelateCards {...item} />
                
                </Col>
            ))}
            
            </Row>

        </Container>
    </Container>


</>
  )
}

export default ChooseTemplate