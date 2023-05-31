import React from 'react'
import storedItems from '../../Data/items.json'
//BootsTrap data
import {Col, Container, Row, Card} from 'react-bootstrap'
import { StoreItem } from './Store'



export function ModrenPoems() {
  return (
    <>

    <Container
         style={{background: "linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%)",
                maxWidth: "100%",
                paddingBottom:"5rem",
              
                }}
                >
      <Container 
        style={{width: "150svh",
        
              }}
        >
        
      {/* <MainPageBodyContainer> */}

      <Row md={2} xs={1} lg={3}
        className='g-3'
        style={{
          // border: "3px solid black",

        }}
       
     
        >
        
        {storedItems
        .filter(item => item.tag === "modern-poems")
        .map(item => (
          <Col
           key={item.id}
            >
            <StoreItem {...item} />
          </Col>
        ))}
        
      </Row>

        </Container>
    </Container>
  </>
  )
}

export default ModrenPoems

