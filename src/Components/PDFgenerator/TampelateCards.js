 import React, {useState, useEffect} from 'react'
 import { Button, Card } from "react-bootstrap"
 import { useImageCart } from "../Context/ImageCartContext";
 
 const TampelateCards = ({id, name, imgUrl}) => {
    const {tampelateId, tampelateHandler} = useImageCart();
    console.log('redred id is: ', tampelateId)

   return (
      <Card  className="h-100"
    style={{
        background:"transparent", 
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        border:"0",
         }}
      >
      <Card.Img
       variant="top" 
       src={imgUrl}  
       style={{ width: "20.5rem", height: "30rem", objectFit: "cover", padding:'10px' }} />
       <Card.Body className="d-flex flex-column">
        <Card.Title style={{justifyContent:'center'}} className="d-flex mb-4">
          <span className="fs-4 text-muted">{name}</span>
        </Card.Title>
        <div className="mt-auto">
        <Button 
            className={`w-100 ${tampelateId === id ? 'btn-green' : ''}`}
        onClick={() => tampelateHandler(id)}
        variant={tampelateId === id ? 'success' : 'primary'}

        >
        { console.log('check the condition')}

           { console.log(tampelateId === id ? 'Selected' : 'Add Image')}
            {tampelateId === id ? 'Selected' : 'Add Image'}
            </Button>

     
        </div>
       </Card.Body>
    </Card>
   )
 }
 
 export default TampelateCards