import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './router/AppRoutes';

function App() {
  return (
    <>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <Router>
      <AppRoutes></AppRoutes>
    </Router>
    </>
  );
}

export default App;
