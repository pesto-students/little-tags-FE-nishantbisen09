import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route path="/product-detail/:id" component={ProductDetails} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
