import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/product-detail/:id" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
