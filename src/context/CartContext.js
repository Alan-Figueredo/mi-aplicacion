import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children })=>{
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const newItem = { item, quantity };
        console.log("se agregó al carrito: ", newItem)
        setCart((prevState)=> [...prevState, newItem]);
    };
    return(
        <CartContext.Provider value={{cart, addItem }}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = ()=> useContext(CartContext);