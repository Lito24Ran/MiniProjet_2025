import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("mon_panier");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("mon_panier", JSON.stringify(cart));
  }, [cart]);

  const handleClick = (item) => {
    const existItem = cart.find(produit => produit._id === item._id);

    if (existItem) {
      setCart(cart.map(produit =>
        produit._id === item._id
          ? { ...produit, quantity: produit.quantity + item.quantity }
          : produit
      ));
    } else {
      // S'assurer qu'on a un champ quantity
      setCart([...cart, { ...item, quantity: item.quantity || 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, handleClick }}>
      {children}
    </CartContext.Provider>
  );
}