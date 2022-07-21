import { Password } from '@mui/icons-material';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { apiLogin } from '../../remote/e-commerce-api/authService';
import { apiGetAllProducts, apiUpsertProduct } from '../../remote/e-commerce-api/productService';
import { UpdateProduct } from './UpdateProduct';

export class AddProduct extends React.Component <any,any>{
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
                <div className="min-h-full  pb-44 bg-white dark:bg-slate-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-green-500">Add Product</h2>
                    <form className="mt-8 space-y-6" onSubmit = {event => this.submit(event)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                        {/* Product Name */}
                        <div>
                            <label htmlFor="name" className="sr-only">Product Name</label>
                            <input 
                                type="text" 
                                value={this.state.name} 
                                onChange={event => this.updateInputValue("name", event)}
                                required
                                placeholder='Product Name'
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                />
                        </div>
                        {/* Product Description */}
                        <div>
                            <label htmlFor="name" className="sr-only">Product Description</label>
                            <input 
                                type="text" 
                                value={this.state.description}
                                onChange = {event => this.updateInputValue("description", event)}
                                required
                                placeholder='Product Description'
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                />
                        </div>
                        {/* Product Price */}
                        <div>
                            <label htmlFor="name" className="sr-only">Product Price</label>
                            <input 
                                type="number" 
                                value={this.state.price}
                                onChange={event => this.updateInputValue("price", event)}
                                required
                                placeholder='Product Price'
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                />
                        </div>
                        {/* Product Quantity */}
                        <div>
                            <label htmlFor="name" className="sr-only">Product Quantity</label>
                            <input 
                                type="number" 
                                value={this.state.quantity}
                                onChange={event => this.updateInputValue("quantity", event)}
                                required
                                placeholder='Product Quantity'
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                />
                        </div>
                        {/* Product Image */}
                        <div>
                            <label htmlFor="name" className="sr-only">Product Image</label>
                            <input 
                                type="text" 
                                value={this.state.url}
                                onChange={event => this.updateInputValue("url", event)}
                                required
                                placeholder='Product Image'
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
                                />
                        </div>
                        {/* Button */}
                            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Product</button>
                        </div>
                    </form>
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
    }
}

