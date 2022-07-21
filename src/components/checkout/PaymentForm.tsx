import * as React from 'react';
import PaymentDetail from '../../models/PaymentDetail';


interface paymentFormProps {
  handleBack: () => void
  handleNext: () => void
  updatePayment: (paymentDetail: PaymentDetail[]) => void
}

export default function PaymentForm(props: paymentFormProps) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props.updatePayment(
      [
        {name: "Card Type", detail: `Visa`},
        {name: "Card Holder", detail: `${data.get('cardName')}`},
        {name: "Card Number", detail: formatCardNumber(`${data.get('cardNumber')}`)},
        {name: "Expiry Date", detail: `${data.get('expDate')}`}
      ]
    )
    props.handleNext()
  }

  const formatCardNumber = (cardNumber: string) => {
    return `xxxx-xxxx-xxxx-${cardNumber.slice(-4)}`
  }

  return (
    <>
      <div className="mt-10 sm:mt-0">
     <h1 className="font-semibold text-green-500 text-2xl">Payment Method</h1>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              {/* Name on card */}
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Name on card</label>
                <input 
                  type="text" 
                  required
                  id="cardName"
                  name="cardName"
                  autoComplete="cc-name"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              {/* Card Number */}
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Card number</label>
                <input 
                  type="text" 
                  required
                  id="cardNumber"
                  name="cardNumber"
                  autoComplete="cc-number"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
              {/* City */}
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Expiry date</label>
                <input 
                  type="text" 
                  required
                  id="expDate"
                  name="expDate"
                  autoComplete="cc-exp"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              {/* State */}
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">CVV</label>
                <input 
                  type="text" 
                  required
                  id="cvv"
                  name="cvv"
                  autoComplete="cc-csc"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
          <div className="text-center sm:px-4 mx-2">
            <button onClick={props.handleBack}  className="inline-flex justify-center py-2 px-4 mx-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Back</button>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
    </>
  );
}