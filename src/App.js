import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/product-detail/:id" component={ProductDetail} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
