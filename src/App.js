import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchResults} />
          <Route path="/product-detail/:id" component={ProductDetails} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/orders" component={OrderHistoryPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
