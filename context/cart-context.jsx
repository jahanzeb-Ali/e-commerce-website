"use client";
import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "sonner"

const CartContext = createContext(undefined)

export function CartProvider({
  children
}) {
  const [items, setItems] = useState([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  const addItem = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        toast.success("Item quantity updated in cart")
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      toast.success("Item added to cart")
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    toast.success("Item removed from cart")
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeItem(id)
      return
    }
    setItems(
      (prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const clearCart = () => {
    setItems([])
    toast.success("Cart cleared")
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    (<CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}>
      {children}
    </CartContext.Provider>)
  );
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

