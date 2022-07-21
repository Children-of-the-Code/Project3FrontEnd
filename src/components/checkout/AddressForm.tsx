import * as React from 'react';
import Address from '../../models/Address';

interface addressFormProps {
  updateAddress: (addresses: Address) => void
  handleNext: () => void
}

export default function AddressForm(props: addressFormProps) {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    props.updateAddress(
      {
        firstName: `${data.get('firstName')}`,
        lastName: `${data.get('lastName')}`,
        address1: `${data.get('address1')}`,
        address2: `${data.get('address2')}`,
        city: `${data.get('city')}`,
        state: `${data.get('state')}`,
        zip: `${data.get('zip')}`,
        country: `${data.get('country')}`
      }
    )
    props.handleNext()
  }

  return (
    <>
     <div className="mt-10 sm:mt-0">
     <h1 className="font-semibold text-green-500 text-2xl">Shipping Address</h1>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              {/* First Name */}
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">First name</label>
                <input 
                  type="text" 
                  required
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              {/* Last Name */}
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Last name</label>
                <input 
                  type="text" 
                  required
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
               {/* Address Line 1 */}
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">Address line 1</label>
                <input 
                  type="text" 
                  required
                  id="address1"
                  name="address1"
                  autoComplete="shipping address-line1"  
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
               {/* Address Line 2 */}
               <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">Address line 2</label>
                <input 
                  type="text" 
                  id="address2"
                  name="address2"
                  autoComplete="shipping address-line2"  
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              {/* City */}
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">City</label>
                <input 
                  type="text" 
                  required
                  id="city"
                  name="city"
                  autoComplete="shipping address-level2"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              {/* State */}
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">State</label>
                <input 
                  type="text" 
                  required
                  id="state"
                  name="state"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              {/* Zip */}
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input 
                  type="text" 
                  required
                  id="zip"
                  name="zip"
                  autoComplete="shipping postal-code"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
              {/* State */}
              <div className="col-span-6 sm:col-span-3">
                <label  className="block text-sm font-medium text-gray-700">Country</label>
                <input 
                  type="text" 
                  required
                  id="country"
                  name="country"
                  autoComplete="shipping country"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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