import './App.css';
import Header from "./components/UI/Header";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
     <Header />
        <div>
            <Route path='/' exact>
                    <Home />
            </Route>
            <Route path='/cart' exact>
                <Cart />
            </Route>
        </div>

    </BrowserRouter>
  );
}

export default App;
