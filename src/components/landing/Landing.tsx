import * as React from 'react';
import Market from '../../assets/market.jpg';


export default function Landing() {
  return (
    <div className="relative pb-16 bg-white dark:bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 bg-white dark:bg-slate-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-8 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight text-green-500 font-extrabold sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Precious Produce</span>
                <br />
                <span className="block text-yellow-400 xl:inline">To enhance your life</span>
              </h1>
              <p className="mt-3 text-base text-orange-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Colonel Kernel's Farmer's Market is an online produce delivery company that simplifies the process of ordering and receiving organic produce in your home!
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={Market}
          alt=""
        />
      </div>
    </div>
  );
};