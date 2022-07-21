import * as React from 'react';
import { json } from 'stream/consumers';
export class UpdateProduct extends React.Component <any,any>{
    sale: any;
    
    constructor(props : any){
        super(props);
            this.state = {
                
            }
        }

        componentDidUpdate(){
            this.updateList();
        }
        componentDidMount(){
            this.updateList();
        }

        updateList(){
            if(this.props.currentproduct){
                fetch("https://localhost"+this.props.currentproduct)
                .then(response => response.json())
                .then(product => {this.setState({currentProduct: product}, console.log)})
            }
        }

        handleSale(e: any){
            e.preventDefault();
            let sale;
            if(this.state.sale&&this.sale!==100){
                sale = this.state.sale;
            }else{
                sale = this.props.currentProduct.sale;
            }

            fetch("" +this.props.currentProduct, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "sale" : sale
                })
            })
        }

        handleUpdate(event: any){
            event.preventDefault()
        }

        render(){
            return(
                <div>
                    <form onSubmit = {event => this.handleUpdate(event)}>
                        <button type= "submit">UPDATE</button>
                    </form>
                </div>
            )
        }
}