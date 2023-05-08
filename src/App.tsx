import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
       <Router>
           <Header />
           <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route> 404 Not Found!</Route>
           </Routes>
       </Router>
    </div>
  );
}

export default App;
