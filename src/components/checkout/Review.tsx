import * as React from 'react';
import Product from '../../models/Product';
import PaymentDetail from '../../models/PaymentDetail';
import Address from '../../models/Address';
import { apiPurchase } from '../../remote/e-commerce-api/productService';
import { CartContext } from '../../context/cart.context';



interface reviewProps {
  handleBack: () => void
  handleNext: () => void
  address: Address
  payments: PaymentDetail[]
}

export default function Review(props: reviewProps) {

  const {cart, setCart} = React.useContext(CartContext)

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    let productPurchaseDtos = cart.map((product) => ({
      id: product.id,
      quantity: product.quantity
    }))
    apiPurchase(productPurchaseDtos)
    setCart([])
    props.handleNext()
  }

  return (
    <>
     <div className="mt-10 sm:mt-0">
        <h1 className="font-semibold text-green-500 text-2xl mb-2">Order summary</h1>
        {cart.map((product) => (
          <>
            <div key={product.name}>
              <div className="flex flex-col justify-between ml-4 flex-grow mb-2">
                <span className="font-bold text-green-500 text-sm">{`${product.name} x${product.quantity}`}</span>
                <span className="text-xs text-yellow-500">{product.description}</span>
                <span className="text-sm">${(product.price * product.quantity).toFixed(2)}</span>
              </div>
            </div>
          </>
        ))}
        <h1 className="font-semibold text-lg mb-2">Total: <span > $ {cart.reduce<number>((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span></h1>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h1 className="font-semibold text-green-500 text-2xl mb-2">Shipping details</h1>
            <p className="font-bold text-md">{`${props.address.firstName} ${props.address.lastName}`}</p>
            <p className="font-bold text-sm">{`${props.address.address1} ${props.address.address2}`}</p>
            <p className="font-bold text-sm">{`${props.address.city}, ${props.address.state} , ${props.address.zip}`}</p>
            <p className="font-bold text-sm">{props.address.country}</p>
          </div>
          <div>
            <h1 className="font-semibold text-green-500 text-2xl mb-2">Payment details</h1>
            {props.payments.map((payment) => (
              <div key={payment.name}>
                <p className="font-bold text-md">{payment.name}</p>
                <p className="font-bold text-sm">{payment.detail}</p>
              </div>
              ))}
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 mx-2">
            <button onClick={props.handleBack} className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Back</button>
            <button  onClick={handleSubmit} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Place Order
            </button>
          </div>
     </div>
    </>
  );
}