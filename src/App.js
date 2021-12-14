import React from 'react';


import {  BrowserRouter as Router,  Route,  Redirect,  Switch} from 'react-router-dom';
import Connect from './comp/Connect';
import Contact from './comp/Contact';
import Footer from './comp/Footer';
import Header from './comp/Header';
import Home from './comp/Home';
import Product from './comp/Product';
import Registre from './comp/Registre';

const App = () => {
  return (
   <Router>
    <main>
      <Switch>
        <Route path="/" exact>
          <Header/><Home/><Footer/>
        </Route>
        <Route path="/products" exact>
          <Header/><Product/><Footer/>
        </Route>
        <Route path="/services" exact>
          <Header/>SERVICES
        </Route>
        <Route path="/contact" exact>
          <Header/><Contact/><Footer/>
        </Route>
        <Route path="/connect" exact>
          <Header/><Connect/><Footer/>
        </Route>
        <Route path="/inscrit" exact>
          <Header/><Registre/><Footer/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;