import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { apiGetAllProducts } from '../../remote/e-commerce-api/productService'
import Product from '../../models/Product'
import { render } from '@testing-library/react'
import { Container } from '@mui/material'
import { ProductCard } from '../display-products/ProductCard'
import { ConstructionRounded, PriceChange } from '@mui/icons-material'



export default function EditSaleProduct() {
    const [products, setProducts] = useState<Product[]>([])



  useEffect(() => {
    const fetchData = async () => {
      const result = await apiGetAllProducts()
      setProducts(result.payload)
    }
    fetchData()
  }, [])

  
    
  return (
    <div>
       
       <div>
       <h1>All Products On Sale for 20 % off</h1>
       <img src="https://www.citypng.com/public/uploads/preview/hd-green-limited-offer-stamp-png-31625678292crfhh6kd22.png" width={250} height={150} alt="logo"/>
       </div>
       
       <>
        <Container>   
        {products.map((item) => (
            <><ProductCard product={item} key={item.id} /><div>
              <h3 className='AddProductHeader'>Product Name: {item.name} </h3>
              <h3 className='AddProductHeader'>Description: {item.description} </h3>
              <h3 className='AddProductHeader'>Product Original Price: ${item.price} </h3>
              <h3 className='AddProductHeader'>Product Sale Price: ${Math.round(item.price)-(item.price*0.20)} </h3>
              <ul>
                <li><button type="submit">Add Sale To Cart</button></li>
              </ul>
          </div></>
            
        ))}
        </Container>
    </>
    </div>
    
  )
 
}

function updateInputValue(arg0: string, event: React.ChangeEvent<HTMLInputElement>): void {
  throw new Error('Function not implemented.')
}
/*
return (
  <div>
      <form onSubmit = {event => submit(event)}>
          <h3 className='AddProductHeader'>Add New Product: </h3>
          <ul>
          <li><span className="AddProductText">Name of Product: </span><br></br>
          <input type="text" value={name} onChange={event => updateInputValue("name", event)}required></input><br></br>
          </li>
          <li><span className="AddProductText">Description: </span><br></br>
          <input type="text" value={description} onChange = {event => updateInputValue("description", event)}required></input><br></br>
          </li>
          <li><span className="AddProductText">Price: </span><br></br>
          <input type="text"value={price} onChange={event => updateInputValue("price", event)}required></input><br></br>
          </li>
          <li><span className="AddProductText">Image of Product: </span><br></br>
          <input type="text" value={url} onChange={event => updateInputValue("url", event)}></input><br></br>
          </li>
          <li><button type="submit">Add Product</button></li>
      </ul>
  </form>
</div>
*/