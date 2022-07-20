import { Password } from '@mui/icons-material';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { apiLogin } from '../../remote/e-commerce-api/authService';
import { apiGetAllProducts, apiGetProductById, apiUpdateProduct } from '../../remote/e-commerce-api/productService';
import { LockClosedIcon } from '@heroicons/react/solid'
import Colonel from '../../assets/colonel.png';
import Product from '../../models/Product';
import { isNumberObject } from 'util/types';
//import { json } from 'stream/consumers'; 
interface productProps {
    product: Product,
    key: number
}
export class UpdateProduct extends React.Component <any,any>{
    //updateInputValue: any;
    constructor(props : any){
        super(props);
            this.state = {
                name: "",
                description: "",
                price: "",
                image: "",
                quantity: "",
                featured: false,
                sale: "",
            }
        }
    
    handleSubmit(event: React.FormEvent<HTMLFormElement>){
        
        //this.setState.data= new FormData(event.currentTarget);
        //if(Response.status >= 200 && Response.status < 300)
    }
    fetchData = async () => {
        const result = await apiGetProductById(this.props.product.id)
        this.setState({
            CurrentProduct: result.payload
        })
        console.log(this.state.CurrentProduct)
      }
    componentDidMount(){
        this.fetchData()
    }

    
        render(){
            return(
    <div key={this.props.product.id} className="group">            
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={Colonel}
            alt="Colonel Kernel"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-500">Update product</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder= {this.state.CurrentProduct.name}
              />
            </div>
            <div>
              <label htmlFor="quantity" className="sr-only">
              Quantity
              </label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                autoComplete="Quantity"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={this.state.CurrentProduct.quantity}
              />
            </div>
            <div>
                <label htmlFor="Discreption" className="sr-only">
                  Discreption
                </label>
                <input
                  id="discreption"
                  name="discreption"
                  type="text"
                  autoComplete="Discreption"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={this.state.CurrentProduct.discreption}
                />
              </div>
            <div>
              <label htmlFor="price" className="sr-only">
                Price
              </label>
              <input
                id="price"
                name="price"
                type="number"
                autoComplete="price"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={this.state.CurrentProduct.price}
              />
            </div>
            <div>
              <label htmlFor="image" className="sr-only">
                Image
              </label>
              <input
                id="image"
                name="image"
                type="text"
                autoComplete="image"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={this.state.CurrentProduct.image}
              />
            </div>
            <div>
              <label htmlFor="featured" className="sr-only">
                Featured
              </label>
              <input
                id="featured"
                name="featured"
                type="boolean"
                autoComplete="featured"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={this.state.CurrentProduct.featured}
              />
            </div>
            <div>
              <label htmlFor="sale" className="sr-only">
                Sale
              </label>
              <input
                id="sale"
                name="sale"
                type="number"
                autoComplete="sale"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder={this.state.CurrentProduct.sale}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" aria-hidden="true" />
              </span>
              Update product
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
        }
        updateInputValue(parameter: any, event: any){
            this.setState({[parameter]: event.target.value})
    }

    submit = async(event: any) => {
        event.preventDefault();
        let id = this.state.CurrentProduct.id;
        let name;
        let quantity;
        let description;
        let price;
        let image;
        let featured;
        let sale;
        if(this.state.name){
            name = this.state.name; 
        }else{
            name = this.state.CurrentProduct.name;
        }
        if(this.state.quantity){
            quantity = this.state.quantity; 
        }else{
            quantity = this.state.CurrentProduct.quantity;
        }
        if(this.state.description){
            description = this.state.description; 
        }else{
            description = this.state.CurrentProduct.description;
        }
        if(this.state.price){
            price = this.state.price; 
        }else{
            price = this.state.CurrentProduct.price;
        }
        if(this.state.image){
            image = this.state.image; 
        }else{
            image = this.state.CurrentProduct.image;
        }
        if(this.state.featured){
            featured = this.state.featured; 
        }else{
            featured = this.state.CurrentProduct.featured;
        }
        if(this.state.sale){
            sale = this.state.sale; 
        }else{
            sale = this.state.CurrentProduct.sale;
        }

        const response = await apiUpdateProduct({id: this.state.CurrentProduct.id},{
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,
            quantity: this.state.quantity,
            featured: this.state.featured,
            sale: this.state.sale
        })

    }
}


