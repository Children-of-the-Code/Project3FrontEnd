import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { CartContext } from './context/cart.context';
import ProductItem from './models/Product';
import { AppRoutes } from './router/AppRoutes';
import{ReactSession} from 'react-client-session';
import { apiSession } from './remote/e-commerce-api/authService';
import { Route, Routes, HashRouter } from "react-router-dom";
import { Cart } from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import { DisplayProducts } from "./components/display-products/DisplayProducts";
import Login from './components/login/Login';
import Register from './components/register/Register';



function App() {
  const [cart, setCart] = useState<ProductItem[]>([]);
  const[login,setLogin]=useState("false");
  const[role, setRole]=useState("");
  const[id, setID]=useState(0);
  const value = { cart, setCart };

  useEffect(()=>{
    fetch("https://onlycorn2.azurewebsites.net/auth/session")
    .then(response=>response.json())
    .then(user=>{console.log(user);if (user.id>0){setLogin("true");setRole(user.role);setID(user.id);};console.log(login+" "+role)})
  },[id==0])



  return (
    <HashRouter>
      <CartContext.Provider value={value}>
        <Routes>
        <Route path="/" element={<DisplayProducts />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
      </HashRouter>
  )
}

export default App;
