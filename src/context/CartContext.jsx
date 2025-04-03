import { createContext, useState } from "react";


export const CartContext = createContext();

 
 export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        // handleClick doit gerer le quantite alefa any am panier
        const existItem = cart.find(produit => produit.id === item.id);
    
        if(existItem) {
          // atao Maj le quantite raha efa misy
          setCart(cart.map(produit =>
              produit.id === item.id ? { ...produit, quantity: produit.quantity + item.quantity} : produit
            ));
        } else {
          setCart([...cart, item]);
        }
        console.log(item);
    };

    return (
        <CartContext.Provider value={{ cart, setCart, handleClick }}>
            {children}
        </CartContext.Provider>
    );
}

