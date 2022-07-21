import {ShoppingCartOutlined} from "@material-ui/icons";

import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import React, { useContext, useEffect, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { NamedTupleMember } from "typescript";
import { CartContext } from "../../context/cart.context";
import Product from "../../models/Product";
import { apiAddFeaturedProduct, apiDeleteFeaturedProduct, apiDeleteProduct, apiGetAllProducts, apiUpdateSale } from "../../remote/e-commerce-api/productService";

interface productProps {
    product: Product,
    key: number,
    fetched:()=>void
}



export const ProductAdmin = (props: productProps) => {
  const { cart, setCart } = useContext(CartContext);
  const [sale,setSale]=useState(0);
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
    props.fetched()
  },[])
  const handleSubmit = (id:number) => {
    apiUpdateSale(id, sale);
    console.log(sale);
    props.fetched();
  }

  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    let sales=e.target.value as unknown as number;
    console.log(sales);
    setSale(sales);
  }
  const deleteProduct=async(id: number)=> {
    const response = await apiDeleteProduct(id) 
    props.fetched();

  }
  const addToFeatured=async(id: number)=>{
    const response = await apiAddFeaturedProduct(id)
    props.fetched();

}


const removeFromFeatured=async(id: number)=>{
    const response = await apiDeleteFeaturedProduct(id) 
    props.fetched();

}



  return (
    <div key={props.product.id} className="group">
    <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
    {props.product.featured===true&&
            <>
               <h1 className="text-2xl font-extrabold tracking-tight text-orange-500 sm:text-2xl mb-4">Featured For You!</h1>
            </>
            }
      <img src={props.product.image} alt={props.product.name} className="object-fill h-48 w-96 group-hover:opacity-75"/>
    </div>
    <h3 className="mt-4 text-lg font-medium text-green-500">{props.product.name}</h3>
    <h3 className="mt-4 text-md font-medium text-yellow-500">{props.product.description}</h3>
    {props.product.sale>0&&<>
    <h3 className="mt-4 text-md font-medium text-gray-700 dark:text-white">Old Price: $<s>{((props.product.price)/((100-props.product.sale)/100)).toFixed(2)}</s></h3>
    <h3 className="mt-4 text-md font-medium text-red-500">Sale: %{props.product.sale}</h3>
    <h3 className="mt-4 text-md font-medium text-gray-700 dark:text-white">New Price: ${(props.product.price).toFixed(2)}</h3>
    </>
    }
    {props.product.sale===0&&<>
    <p className="mt-1 text-lg font-medium text-gray-900 dark:text-white">Price: ${(props.product.price).toFixed(2)}</p>
    </>}

    <button onClick={() => deleteProduct(props.product.id)} type="submit" className="group mb-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
      <AppRegistrationOutlinedIcon /> 
      </span>
      Delete Product
    </button>
    {props.product.featured===false&&
    <button onClick={() => addToFeatured(props.product.id)} type="submit" className="group mb-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
      <AppRegistrationOutlinedIcon /> 
      </span>
      Add to featured
    </button>}
    {props.product.featured===true&&
    <button onClick={() => removeFromFeatured(props.product.id)} type="submit" className="group mb-2 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
      <AppRegistrationOutlinedIcon /> 
      </span>
      Remove from featured
    </button>}
    
    <div>
              <label htmlFor="sale" className="sr-only">
                Sale
              </label>
              <input
                id="sale"
                name="sale"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Sale"
                onChange={handleChange}
              />
            </div>
            <button onClick={()=>handleSubmit(props.product.id)} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <span className="absolute left-0 inset-y-0 flex items-center pl-3"> 
      </span>
      Update Sale
      
    </button>
    
  </div>
  );
};




