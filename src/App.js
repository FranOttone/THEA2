//Estilos//
import './App.css';
//React-Router//
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//Componentes//
import Header from './Components/Header/Header';
//Vistas//
import Home from './views/Home/Home'
import Carrito from './views/Cart/Carrito'
import ItemDetail from './views/ItemDetail/ItemDetail';
import Top from './views/Top/Top';
import Bottom from './views/Bottom/Bottom';
import CartProvider from './Components/CartContext/CartContext';



function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/cart" component={Carrito}/>
                <Route path="/top"  exact component={Top}/>
                <Route path="/top/detail/:id" component={ItemDetail}/>
                <Route path="/bottom" exact component={Bottom}/>
                <Route path="/bottom/detail/:char_id" component={ItemDetail}/>
            </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
