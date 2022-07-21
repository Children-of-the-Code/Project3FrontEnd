import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart.context";
import Product from "../../models/Product";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import DetailsOutlinedIcon from '@mui/icons-material/DetailsOutlined';
import Login from "../login/Login";
import { Link } from "react-router-dom";

interface productProps {
    product: Product,
    key: number
}

export const ProductCardFeatured = (props: productProps) => {
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
  useEffect(()=>{
    console.log(props.product.sale)
  })
  return (
    <div key={props.product.id} className="group">
    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
      <img src={props.product.image} alt={props.product.name} className="object-fill h-48 w-96 group-hover:opacity-75"/>
    </div>
    <h3 className="mt-4 text-lg font-medium text-green-500">{props.product.name}</h3>
    {props.product.sale>0&&<>
    <h3 className="mt-4 text-md font-medium text-gray-700 dark:text-white">Old Price: $<s>{((props.product.price)/((100-props.product.sale)/100)).toFixed(2)}</s></h3>
    <h3 className="mt-4 text-md font-medium text-red-500">Sale: %{props.product.sale}</h3>
    <h3 className="mt-4 text-md font-medium text-gray-700 dark:text-white">New Price: ${(props.product.price).toFixed(2)}</h3>
    </>
    }
    {props.product.sale===0&&<>
    <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">Price: ${(props.product.price).toFixed(2)}</p>
    </>}    {/* User UI */}
    <div className="px-2 py-2 text-center sm:px-2 mx-2">
    <Link to={`/products/${props.product.id}`} >
    <button type="submit" className="inline-flex justify-center py-2 px-4 mx-2 mb-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        <DetailsOutlinedIcon /> View Details
    </button>
    </Link>
    <button onClick={() => {addItemToCart({...props.product, quantity: 1})}} type="submit" className="inline-flex justify-center py-2 px-4 mx-2 mb-2 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
      <AddShoppingCartOutlinedIcon /> Add to cart
    </button>
    </div>
    {/* Admin UI */}
  </div>
  );
};