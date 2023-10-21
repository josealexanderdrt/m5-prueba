import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Navigation from "./components/Navigation";
import NotFound from "./views/NotFound";
import OrderDetail from "./views/OrderDetail";
import PizzaDetail from "./views/PizzaDetail";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<OrderDetail />} />
        <Route path="/pizza/:idPizza" element={<PizzaDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
}

export default App;
