
import styled from 'styled-components';
import { Route, Routes } from "react-router-dom";

import Navbar from './ components/Navbar';
import Home from './ components/Home';
import About from './ components/About';
import Cart from './ components/Cart';
import Checkout from './ components/Checkout';
import Products from './ components/Products';

function App() {
  return (
    <div className="App">
      <h1>Voguish🛍️</h1>

      <Navbar />
      <Routes>
          <Route exaxt path="/home" element={<Home />}/>
          <Route exaxt path="/about" element={<About />}/>
          <Route exaxt path="/cart" element={<Cart />}/>
          <Route exaxt path="/checkout" element={<Checkout />}/>
          <Route exaxt path="/products" element={<Products />}/>
      </Routes>
    
      
     
     
    </div>
  );
}

export default App;
