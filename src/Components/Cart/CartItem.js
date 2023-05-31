import { useImageCart } from "../Context/ImageCartContext";
import storedItems from '../../Data/items.json'
import { Button, Stack } from "react-bootstrap";

// this component build the infomation of the picked image that we will show im ImageCart (the slidbar)
// it show everything in the side bar and add a remove buttun in the side bar
export function CartItem({id, quantity}) {
    const { removeFromCart} = useImageCart()
    const item = storedItems.find(i => i.id === id)
    if(item == null) return null
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{width: "125px", objectFit:"cover"}} />
            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && (
                    
                    <span className="text-muted"  style={{fontSize:"1.65rem"}}>
                    x{quantity}
                    </span>
                    )}
                </div>
            </div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>
                &times;
            </Button>

        </Stack>
    )
}