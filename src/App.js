import React from 'react';


import {  BrowserRouter as Router,  Route,  Redirect,  Switch} from 'react-router-dom';
import Check from './comp/Check';
import Comand from './comp/Comand';
import Comands from './comp/Comands';
import Connect from './comp/Connect';
import Contact from './comp/Contact';
import Footer from './comp/Footer';
import Header from './comp/Header';
import Home from './comp/Home';
import Product from './comp/Product';
import Registre from './comp/Registre';
import Service from './comp/Service';
import './index.css'

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
          <Header/><Service/><Footer/>
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
        <Route path="/comand" exact>
          <Header/><Comand/><Footer/>
        </Route>
        <Route path="/check" exact>
          <Header/><Check/><Footer/>
        </Route>
        <Route path="/comands" exact>
          <Header/><Comands/><Footer/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;