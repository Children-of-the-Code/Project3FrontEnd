import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Product from "../../models/Product";
import { apiGetProductById } from "../../remote/e-commerce-api/productService";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [ cartItem, setCartItem ] = useState([]);

  const navigate = useNavigate();

  // increase quantity
  const increment =async (product: any) => {
    const response=await apiGetProductById(product.id);
    const newCart = [...cart]
    const index = newCart.findIndex((searchProduct) => {
      return searchProduct.id === product.id
    })

    if (index === -1) {
      newCart.push(product)
    }else if(newCart[index].quantity<response.payload.quantity) {
      newCart[index].quantity += product.quantity
    }

    setCart(newCart)
  }

  const decrement = (product: any) => {

    const currCart = [...cart]
    const index = currCart.findIndex((searchProduct) => {
      return searchProduct.id === product.id
    })
      if (index >= 0){
        currCart[index].quantity -= product.quantity
    } else if (index < 1){
        alert('Please remove from cart')
    } else {
      return product
    }

    setCart(currCart)
  }

  const removeItem = (id: Product) => {
    const newCart=[...cart]
    const cartIndex=newCart.indexOf(id)
    newCart.splice(cartIndex,1)
    setCart(newCart);
  }
  

  return (
    <div className="bg-white dark:bg-slate-800 pt-4">
    <div className="container mx-auto mt-8 mb-10 bg-white dark:bg-slate-800">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white dark:bg-slate-800 px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-green-500 text-2xl">Shopping Cart</h1>
        </div>
        {/* Cart Column Header */}
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 dark:text-white text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 dark:text-white text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 dark:text-white text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 dark:text-white text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
        {/* Cart Map Start */}
        {
              cart.map((product)=> (
                <>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/5"> 
            <div className="w-20">
              <img className="h-24" src={product.image} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-green-500 text-sm">{product.name}</span>
              <span className="text-yellow-500 text-xs">{product.description}</span>
              <button onClick={() => {removeItem(product)}} className="font-semibold hover:text-red-500 text-red-500 text-xs">Remove</button>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <button onClick={() => {if(product.quantity>1){decrement({...product, quantity: 1})}}}>-</button>
              <input className="mx-2 border text-center w-8" type="text" value={product.quantity} />
            <button onClick={() => {{increment({...product, quantity: 1})}}}>+</button>
          </div>
          <span className="text-center w-1/5 dark:text-white font-semibold text-sm">${product.price.toFixed(2)}</span>
          <span className="text-center w-1/5 dark:text-white font-semibold text-sm">${(product.price * product.quantity).toFixed(2)}</span>
        </div>
        </>
              ))
            }
      {/* Cart Map End */}
      {/* Link to Shop */}
        <a href="#" className="flex font-semibold text-orange-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-orange-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>
      {/* Order Summary Start */}
      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl text-yellow-500 border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold dark:text-white text-sm uppercase">Items {cart.reduce<number>((total, product) => total + product.quantity, 0)}</span>
          <span className="font-semibold dark:text-white text-sm">${cart.reduce<number>((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span>
        </div>
        <div>
          <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold dark:text-white text-sm uppercase">Standard Shipping</span>
          <span className="font-semibold dark:text-white text-sm">$4.95</span>
        </div>
          <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold dark:text-white text-sm uppercase">Shipping Discount</span>
          <span className="font-semibold text-red-500 text-sm">-$4.95</span>
        </div>
        </div>
        <div className="border-t mt-8">
          <div className="flex dark:text-white font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${cart.reduce<number>((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span>
          </div>
          <button onClick={() => {navigate('/checkout')}} className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
  </div>
  )
};