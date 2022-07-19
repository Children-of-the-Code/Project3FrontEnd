import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";

export const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-10">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        </div>
        {/* Cart Column Header */}
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
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
              <span className="font-bold text-sm">{product.name}</span>
              <span className="text-red-500 text-xs">{product.description}</span>
              <p className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</p>
            </div>
          </div>
          <div className="flex justify-center w-1/5">
            <p onClick={() => {product.quantity -= 1}}>-</p>
            <input className="mx-2 border text-center w-8" type="text" value={product.quantity} />
            <p>+</p>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm">${product.price}</span>
          <span className="text-center w-1/5 font-semibold text-sm">${product.price * product.quantity}</span>
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
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items {cart.reduce<number>((total, product) => total + product.quantity, 0)}</span>
          <span className="font-semibold text-sm">${cart.reduce<number>((total, product) => total + product.price * product.quantity, 0)}</span>
        </div>
        <div>
          <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Standard Shipping</span>
          <span className="font-semibold text-sm">$4.95</span>
        </div>
          <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Shipping Discount</span>
          <span className="font-semibold text-sm">-$4.95</span>
        </div>
        </div>
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${cart.reduce<number>((total, product) => total + product.price * product.quantity, 0)}</span>
          </div>
          <button onClick={() => {navigate('/checkout')}} className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
  )
};