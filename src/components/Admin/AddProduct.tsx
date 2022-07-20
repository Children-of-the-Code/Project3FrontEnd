import { Password } from '@mui/icons-material';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { apiLogin } from '../../remote/e-commerce-api/authService';
import { apiGetAllProducts, apiUpsertProduct } from '../../remote/e-commerce-api/productService';
import { LockClosedIcon } from '@heroicons/react/solid'
import Colonel from '../../assets/colonel.png';
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
                image: "",
                quantity: "",
                featured: false,
                sale: "",
                product: []
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
                <>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={Colonel}
            alt="Colonel Kernel"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-500">Add new product</h2>
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
                placeholder="Name"
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
                placeholder="Quantity"
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
                  placeholder="Discreption"
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
                placeholder="Price"
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
                placeholder="Image"
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
                placeholder="Featured"
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
                placeholder="Sale"
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
              Add product
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  );
        }
        updateInputValue(parameter: any, event: any){
            this.setState({[parameter]: event.target.value})
    }

    submit = async(event: any) => {
        event.preventDefault();
        let name = this.state.name;
        let quantity = this.state.quantity;
        let description = this.state.dscription;
        let price = this.state.description;
        let image = this.state.image;
        let featured = this.state.featured;
        let sale = this.state.sale;
        const response = await apiUpsertProduct({
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


