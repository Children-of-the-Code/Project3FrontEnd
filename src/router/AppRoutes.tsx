import React from 'react';
import { Route, Routes } from "react-router-dom";
import { DisplayProducts } from "../components/display-products/DisplayProducts";

export const AppRoutes: React.FC<unknown> = () => (
  <Routes>
    <Route path="/" element={<DisplayProducts />} />
  </Routes>
)