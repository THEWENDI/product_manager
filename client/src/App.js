import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import './App.css';
import Main from "./views/Main"
import EditProduct from "./views/EditProduct"
import OneProduct from "./views/OneProduct"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/products/:id">
            <OneProduct/>
          </Route>
          <Route exact path="/products/:id/edit">
            <EditProduct/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
