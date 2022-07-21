import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { apiGetProductById } from '../../remote/e-commerce-api/productService'
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Product from "../../models/Product";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default function ProductDetail() {
  const { cart, setCart } = useContext(CartContext);

  const { id } = useParams()
  let productId: any = id
    const [product, setProduct] = useState<any>([]);
          
      useEffect(() => {
        const fetchData = async () => {
          const result = await apiGetProductById(productId)
          setProduct(result.payload)
        }
        fetchData()
      }, [])

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
       <>
       <div className="bg-white px-8 pt-16">
        {/* Product image */}
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-2 ...">
          </div>
          <div className="col-start-2 col-end-4 ...">
            <img src={product.image} alt={product.name} className="object-fill h-48 w-96 group-hover:opacity-75"/>
          </div>
          <div className="col-start-4 col-end-6 ...">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl mb-4">{product.name}</h1>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mb-2">{product.description}</h1>
            <p className="text-xl text-gray-900 mb-4">${product.price.toFixed(2)}</p>
            <button onClick={() => {addItemToCart({...product, quantity: 1})}} type="submit" className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            <AddShoppingCartOutlinedIcon /> Add to cart
          </button>
          </div>
        </div>
      </div>
        </>
    )
}