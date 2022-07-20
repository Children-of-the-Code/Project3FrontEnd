import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { apiGetProductById } from '../../remote/e-commerce-api/productService'
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Product from "../../models/Product";


export default function ProductDetail() {
  const { id } = useParams()
  let productId: any = id
    const [data, setData] = useState<any>([]);
          
      useEffect(() => {
        const fetchData = async () => {
          const result = await apiGetProductById(productId)
          setData(result.payload)
        }
        fetchData()
      }, [])

      
    return (
       <>
       <div className="bg-white px-8 pt-8">
        {/* Product image */}
        <div className="w-1/3 aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img src={data.image} alt={data.name} className="object-fill h-48 w-96 group-hover:opacity-75"/>
        </div>
      
       {/* Product info */}
       <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">{data.name}</h1>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">{data.description}</h1>
            <p className="text-xl text-gray-900">${data.price}</p>
          </div>
        </div>




      </div>
        </>
    )
}