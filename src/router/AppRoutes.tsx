import React from 'react';
import { Route, Routes } from "react-router-dom";
import { DisplayProducts } from "../components/display-products/DisplayProducts";
import Login from '../components/login/Login';
import Register from '../components/register/Register';

export const AppRoutes: React.FC<unknown> = () => (
  <Routes>
    <Route path="/" element={<DisplayProducts />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
)