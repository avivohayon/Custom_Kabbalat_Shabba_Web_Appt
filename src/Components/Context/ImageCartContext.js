import { createContext, useContext, useState } from "react";
import { ImageCart } from "../Cart/ImageCart";
import { useLocalStorage } from "../../Hooks/UseLocalStorage";
import {useDispatch, useSelector} from 'react-redux';
import  {saveTampelateConfig}  from '../../ReduxStore/ReduxStore';
import storedItems from '../../Data/items.json'

const ImageCartContext = createContext({})  

//custom context hook
export function useImageCart() {
    return useContext(ImageCartContext)
}

// provider  for warping the context hook
export function ImageCartProvider({children}) {
    // each CartItem Type will have these properties:
    // id: number, quantity:number
    const [isOpen, setIsOpen] = useState(false)
    const [tampelateId, setTamelateId] = useState(null)

    //custom hook for saving image cart after user refreshed the page
    const[cartItems, setCartItems] = useLocalStorage("image-cart", [])
    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0)

    const dispach = useDispatch();
    const tampelateHandler = (id) => {
        console.log('clicked image id is: ', id)
        //The prevId parameter in the arrow function is implicitly defined by the useState hook when you use the functional 
        //form of state update. The prevId represents the previous state value of selectedId.
        dispach(saveTampelateConfig(id))
        setTamelateId((prevID) => prevID === id ? null : id);
        
      };

    const openCart = () => {
        setIsOpen(true)

    }
    const closeCart = () =>{
         setIsOpen(false)
    }
    function getItemQuantity(id){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id) {
        setCartItems((curItems) => {
            const itemExists = curItems.find((item) => item.id === id);
            if (!itemExists) {

              return [...curItems, { id, quantity: 1 }];
            } else {
              return curItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
              );
            }
          });
    }

    function decreaseCartQuantity(id) {
        setCartItems(curItems => {
            if (cartItems.find(item => item.id === id)?.quantity === 1 ){
                return curItems.filter(item => item.id !== id)
            } else {
                return curItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    //helper function of the saveImghandler
    const getImageUrlById = (id) => {
        const item = storedItems.find ((item) => item.id === id)
        return item ? item.imgUrl : null;
    }
    function removeFromCart(id) {
        const deleteUrl = getImageUrlById(id);
        setCartItems(curItems => {
           return curItems.filter(item => item.id !== id)
        })
    }

    function getCartItems() {
 
        return cartItems;
    }
    
    return (<ImageCartContext.Provider 
            value={{
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartItems,
                openCart,
                closeCart,
                cartQuantity,
                tampelateId,
                tampelateHandler,
              


                }}>
            {children}
            <ImageCart isOpen={isOpen} />
            </ImageCartContext.Provider>
    )
}

