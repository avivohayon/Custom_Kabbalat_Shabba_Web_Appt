import { Button, Card } from "react-bootstrap"
import { useImageCart } from "../Context/ImageCartContext"

// type StoreItemProps = {
//     id: number
//     name: string 
//     imgUrl: string
// }

// this component show each image the user can choose from as a card with these data:
// title, add and remove buttuns (to the cart in the side bar) and - + for adding more or less quananity of the wanted image
export function StoreItem({id, name, imgUrl}) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useImageCart()

  const quantity = getItemQuantity(id)


  return(
    <Card  className="h-100"
    style={{
        background:"transparent", 
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        border:"0"
         }}
      >
      <Card.Img
       variant="top" 
       src={imgUrl}  
       style={{ width: "18.5rem", height: "20rem", objectFit: "cover" }} />
       <Card.Body className="d-flex flex-column">
        <Card.Title style={{justifyContent:'center'}} className="d-flex mb-4">
          <span className="fs-4 text-muted">{name}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>add image</Button>
          ) : 
          <div className="d-flex align-items-center flex-column"
               style={{gap: '.5rem'}}>
                <div className="d-flex align-items-center justify-content-center"
                style={{gap: '.5rem'}} >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3"> {quantity} </span> saved 
                </div>
                <Button onClick={() => increaseCartQuantity(id)} >+</Button>
                </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}> remove </Button>
                
            </div>
            }
        </div>
       </Card.Body>
    </Card>
  ) 
    
}
