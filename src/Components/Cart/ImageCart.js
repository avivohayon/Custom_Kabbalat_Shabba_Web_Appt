import { Offcanvas, Stack } from "react-bootstrap";
import { useImageCart } from "../Context/ImageCartContext";
import { CartItem } from "./CartItem";

//this cart item  show the picked images for the Kabalat Shabbat from the MainPage (Bible / Holidays / Modren poems)
// use also the CartItem component to populate the information needed
export function ImageCart({isOpen}) {
    const {closeCart, cartItems} = useImageCart()


    if (!cartItems || cartItems.length === 0) {
        return null; // Render nothing if cartItems are empty or undefined
      }


    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">

        <Offcanvas.Header closeButton>
            
            <Offcanvas.Title>Your Images</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack  />
            <Stack gap={3}>
            {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}






