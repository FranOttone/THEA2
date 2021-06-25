//Estilos
import './App.css';
//React-Router
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//Vistas//
import Home from './views/Home/Home'
import Carrito from './views/Cart/Carrito'
import Header from './Components/Header/Header';
import ItemDetail from './views/ItemDetail/ItemDetail';
import Top from './views/Top/Top';
import Bottom from './views/Bottom/Bottom';



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/cart" component={Carrito}/>
      <Route path="/top"  exact component={Top}/>
      <Route path="/top/detail/:id" component={ItemDetail}/>
      <Route path="/bottom" exact component={Bottom}/>
      <Route path="/bottom/detail/:id" component={ItemDetail}/>
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
