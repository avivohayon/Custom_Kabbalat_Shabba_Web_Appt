import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import storedItems from '../../Data/items.json'
import { StoreItem } from './Store'
import { useSelector} from 'react-redux';


export const BibleText = () => {
  const userName = useSelector((state) => state.userInfo.value.titleName)

  return (
    <>
    <Container 
    
         style={{background: "linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%)",
         maxWidth: "100%",
                paddingBottom:"5rem"
                }}
                >
      <Container 
        style={{maxWidth: "150svh"
              }}
        >
        

      <Row md={2} xs={1} lg={3}
        className='g-3'>
        
        {storedItems
        .filter(item => item.tag === "bible")
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


export default BibleText