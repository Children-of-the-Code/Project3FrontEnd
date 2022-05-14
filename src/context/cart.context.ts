import React from 'react';
import ProductItem from '../models/ProductItem';

interface CartContextState {
    cart: ProductItem[];
    setCart: (cart: ProductItem[]) => void;
}

// Define the Cart Context
// This will provided at the top level of the component hierarchy
// Then any child component will be able to access the cart info
// by using the useContext hook as follows:
// const { cart, setCart } = useContext(CartContext);
// And then the cart can be used and updated in a standard fashion
export const CartContext = React.createContext<CartContextState>({
    cart: [],
    setCart: () => { }
});