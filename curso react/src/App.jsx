
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Catalogo from './Catalogo';
import DetalleProducto from './DetalleProducto';
import ItemListContainer from './ItemListContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route path="/category/:id" component={ItemListContainer} />
          <Route path="/item/:id" component={DetalleProducto} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
