import * as React from 'react';
import { apiLogin } from '../../remote/e-commerce-api/authService';
import { useNavigate } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid'
import Colonel from '../../assets/colonel.png';

interface Logger{
  logged:()=>void
}

export default function Login({logged}:Logger) {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await apiLogin(`${data.get('email')}`, `${data.get('password')}`);
    if (response.status >= 200 && response.status < 300) navigate('/products')
    logged()
  };


  return (
    <>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src={Colonel}
            alt="Colonel Kernel"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-500">Sign In</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            And{' '}
            <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500">
              start shopping today!
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">

            <div className="text-sm">
              <a onClick={() => {navigate('/register')}} className="font-medium text-orange-500 hover:text-orange-500">
               Need to Registerd?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-yellow-500 group-hover:text-yellow-400" aria-hidden="true" />
              </span>
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
    
    </>
  );
}