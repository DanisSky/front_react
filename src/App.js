import ListItems from "./components/ListItems";
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import ProductCart from "./components/ProductCart";
 

function App() {
  return (
        <div className="App">
          <BrowserRouter>
           <Switch>
             <Route path="/" component={ListItems} exact/>
             <Route path="/product/:id" component={ProductCart} />
           </Switch>
          </BrowserRouter>
           
        
        </div>
  );
}

export default App;
