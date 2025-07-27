import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("mon_panier");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [orderHistory, setOrderHistory] = useState(() => {
    const saved = localStorage.getItem("historique_commandes");
    if (!saved) return [];

    // On verifie si chaque commande a un champ status, sinon on ajoute en attente
    return JSON.parse(saved).map((cmd) =>
      cmd.status ? cmd : { ...cmd, status: "en attente" }
    );
  });

  useEffect(() => {
    localStorage.setItem("mon_panier", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("historique_commandes", JSON.stringify(orderHistory));
  }, [orderHistory]);

  const handleClick = (item, toastFn) => {
    const existItem = cart.find(produit => produit._id === item._id);
    if (existItem) {
      setCart(cart.map(produit =>
        produit._id === item._id
          ? { ...produit, quantity: produit.quantity + item.quantity }
          : produit
      ));
    } else {
      setCart([...cart, { ...item, quantity: item.quantity || 1 }]);
    }
  
    if (toastFn) toastFn("Produit ajouté 😋", "success");
  };  

  return (
    <CartContext.Provider
      value={{ cart, setCart, handleClick, orderHistory, setOrderHistory }}
    >
      {children}
    </CartContext.Provider>
  );
}