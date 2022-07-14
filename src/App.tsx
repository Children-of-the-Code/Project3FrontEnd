import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import './App.css';
import { CartContext } from './context/cart.context';
import ProductItem from './models/Product';
import{ReactSession} from 'react-client-session';
import { apiLogout, apiSession } from './remote/e-commerce-api/authService';
import { Route, Routes, HashRouter } from "react-router-dom";
import { Cart } from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import { DisplayProducts } from "./components/display-products/DisplayProducts";
import Login from './components/login/Login';
import Register from './components/register/Register';
import Navbar from './components/navbar/Narbar'
import { LegendToggleRounded } from '@mui/icons-material';



function App() {
  const [cart, setCart] = useState<ProductItem[]>([]);
  const value = { cart, setCart };
  const [login,setLogin]=useState<{logged:boolean,id:number,role:string}>({
    logged:false,
    id:0,
    role:""
  })
  const handleClick=async()=>{
    apiLogout()
    setLogin({
      logged:false,
      id:0,
      role:""
    })
  }
  

  const fetchData = async () => {
    const result = await apiSession()
    let temp=result.payload
    if (temp.id>0){
      setLogin({
        logged:true,
        id:temp.id,
        role:temp.role
      });
    }
    console.log(login)
  }

  const logged = async () => {
    fetchData()
  }

 
useEffect(()=>{
  
  
  fetchData()
  
  console.log(login)
},[login.id]
  
  )

  return (
    <HashRouter>
      <Navbar key={login.id} login={login.logged} id={login.id} role={login.role} handleClick={handleClick}></Navbar>
      <CartContext.Provider value={value}>
        <Routes>
          {login.logged&&
          <Route path="/" element={<DisplayProducts />} />
          }
          {login.logged===false&&
            <Route path="/login" element={<Login logged={logged}/>} />
          }
          {login.logged===false&&
            <Route path="/register" element={<Register />} />
          }
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>

    </HashRouter>
  )
}

export default App;
