import { Password } from '@mui/icons-material';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { apiLogin } from '../../remote/e-commerce-api/authService';
import { apiGetAllProducts, apiUpsertProduct } from '../../remote/e-commerce-api/productService';
import { UpdateProduct } from './UpdateProduct';
//import { json } from 'stream/consumers'; 
export class AddProduct extends React.Component <any,any>{
    //submit: any;
    //updateInputValue: any;
    constructor(props : any){
        super(props);
            this.state = {
                name: "",
                description: "",
                price: "",
                url: "",
                quantity: "",
                products: []
            }
        }
    
    handleSubmit(event: React.FormEvent<HTMLFormElement>){
        
        //this.setState.data= new FormData(event.currentTarget);
        //if(Response.status >= 200 && Response.status < 300)
    }
    fetchData = async () => {
        const result = await apiGetAllProducts()
        this.setState({
            products: result.payload
        })
        console.log(this.state.products)
      }
    componentDidMount(){
        this.fetchData()
    }

    
        render(){
            return(
                <div>
                <div>
                    <form onSubmit = {event => this.submit(event)}>
                        <h3 className='AddProductHeader'>Add New Product: </h3>
                        <ul>
                            <li><span className="AddProductText">Name of Product: </span><br></br>
                            <input type="text" value={this.state.name} onChange={event => this.updateInputValue("name", event)}required></input><br></br>
                            </li>
                            <li><span className="AddProductText">Description: </span><br></br>
                            <input type="text" value={this.state.description} onChange = {event => this.updateInputValue("description", event)}required></input><br></br>
                            </li>
                            <li><span className="AddProductText">Price: </span><br></br>
                            <input type="number" value={this.state.price} onChange={event => this.updateInputValue("price", event)}required></input><br></br>
                            </li>
                            <li><span className="AddProductText">Quantity: </span><br></br>
                            <input type="number"  value={this.state.quantity} onChange={event => this.updateInputValue("quantity", event)}required></input><br></br>
                            </li>
                            <li><span className="AddProductText">Image of Product: </span><br></br>
                            <input type="text" value={this.state.url} onChange={event => this.updateInputValue("url", event)}></input><br></br>
                            </li>
                            <li><button type="submit">Add Product</button></li>
                        </ul>
                    </form>
                </div>
                <div>
                    <h2>Update Products</h2>
                    {this.state.products&&<>
                {this.state.products.map((item:any) => {
                    <div>A<UpdateProduct product={item} key={item.id}/></div>
                })}</>}
                </div>
                </div>
            )
        }
        updateInputValue(parameter: any, event: any){
            this.setState({[parameter]: event.target.value})
    }

    submit = async(event: any) => {
        event.preventDefault();
        let name = this.state.name;
        let description = this.state.dscription;
        let price = this.state.description;
        let url = this.state.url;
        const response = await apiUpsertProduct({
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            image: this.state.url,
            quantity: this.state.quantity
        })

        /*fetch("http://localhost:5000/api/product", {
            method: "PUT",
            mode: "cors",
            headers: {
                'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "description": description,
                "price": price,
                "url": url
            })
        })*/

    }
}


/*import React, {useEffect, useState} from 'react';
 import Product from '../../models/Product';
 import eCommerceClient, { eCommerceApiResponse } from '../../remote/e-commerce-api/eCommerceClient';
 export const apiUpsertProduct = async (product: Product): Promise<eCommerceApiResponse> => {
     const response = await eCommerceClient.put<any>(
        `${baseURL}/AddProduct`,
         product
     );
     return { status: response.status, payload: response.data };
 }

export function AddProduct(props: any){
    const[name, setName] = useState<any>("");
    const[description, setDesciption] = useState<any>("");
    const[price, setPrice] = useState<any>();
    const[url, setUrl] = useState<any>("");
    const[sale, setSale] = useState<any>("");
    const[initialRender, setInitialRender] = useState<any>(true);

    useEffect(() => {
        console.log(name)
        let name = useState.name;
        let description = useState.description;
        let price = useState.price;
        let url = useState.url;
        console.log(useState.url)
        })

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

        function updateInputValue(parameter: any, event: any){
            useState({[parameter]: event.target.value}
    )
    
    const submit = () => {
        event.preventDefault();
        console.log (useState.name)
        let name = useState.name;
        let description = useState.description;
        let price = useState.price;
        let url = state.url;
        console.log(useState.url)
    }
    }
}*/
