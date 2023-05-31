import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import storedItems from '../../Data/items.json'
import { StoreItem } from './Store'

const Holidays = () => {
  return (
    <>

    <Container
         style={{background: "linear-gradient(90deg, #DCE2F1 9.64%, #ECEEF1 58.53%)",
                maxWidth: "100%",
                paddingBottom:"5rem"
                }}>
      <Container 
        style={{width: "150svh"
              }}
        >

      <Row md={2} xs={1} lg={3}
        className='g-3'
        >
        
        {storedItems
        .filter(item => item.tag === "holidays")
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

export default Holidays




{/* <div className="faq">
<h3>Frequently Asked Questions</h3>

<div className="question">
  <p><strong>Lorem ipsum dolor sit amet.</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
</div>

<div className="question">
  <p><strong>Lorem ipsum dolor sit amet.</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
</div>

<div className="question">
  <p><strong>Lorem ipsum dolor sit amet.</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
</div>

<div className="question">
  <p><strong>Lorem ipsum dolor sit amet.</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
</div>

<div className="question">
  <p><strong>Lorem ipsum dolor sit amet.</strong></p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, recusandae doloribus qui molestias similique asperiores incidunt. Obcaecati tenetur consectetur dolorem eius ex, ad, laudantium inventore quia odio minus eligendi ipsa?</p>
</div>

</div> */}