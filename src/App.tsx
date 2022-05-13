import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './router/AppRoutes';

function App() {
  return (
    <>
    <Router>
      <AppRoutes></AppRoutes>
    </Router>
    </>
  );
}

export default App;
