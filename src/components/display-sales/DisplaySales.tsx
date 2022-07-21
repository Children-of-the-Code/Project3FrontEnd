import React, { useEffect, useState } from 'react';
import Product from '../../models/Product';
import { apiGetAllProducts, apiGetFeaturedProducts, apiGetProductsOnSale } from '../../remote/e-commerce-api/productService';
import { ProductCardSales } from "./ProductSalesCard";


export const DisplaySales = () => {

  const [products, setProducts] = useState<Product[]>([])


  useEffect(() => {
    const fetchData = async () => {
      const result = await apiGetProductsOnSale()
      setProducts(result.payload)
    }
    fetchData()
  }, [])

  return (
    <>
     <div className="bg-white dark:bg-slate-800">
        <div className="max-w-2xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-green-500">It's On Sale!</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((item) => (
              <ProductCardSales product={item} key={item.id}/>
            ))}
          </div>
        </div>
      </div>
    </>  
    
  );
};