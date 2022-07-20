import {ShoppingCartOutlined} from "@material-ui/icons";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Product from "../../models/Product";

interface productProps {
    product: Product,
    key: number
}

export const SalesCard = (props: productProps) => {
  const { cart, setCart } = useContext(CartContext);
  
  const addItemToCart = (product: Product) => {

    const newCart = [...cart]
    const index = newCart.findIndex((searchProduct) => {
      return searchProduct.id === product.id
    })

    if (index === -1) newCart.push(product)
    else newCart[index].quantity += product.quantity

    setCart(newCart)
  }

  
  return (
    
    <div key={props.product.id} className="group">
    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <img src={props.product.image} alt={props.product.name} className="object-fill h-48 w-96 group-hover:opacity-75"/>
    </div>
    <h3 className="mt-4 text-lg font-medium text-gray-700">{props.product.name}</h3>
    <h3 className="mt-4 text-md font-medium text-gray-700">{props.product.description}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">${props.product.price}</p>
    <button onClick={() => {addItemToCart({...props.product, quantity: 1})}} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        <ShoppingCartOutlined  /> 
      </span>
      Update 
    </button>
  </div>

  
  );
};