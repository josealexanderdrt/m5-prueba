import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import PizzaProvider from "./context/PizzaProvider.jsx";
import OrderDetailProvider from "./context/OrderDetailProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
   
      <PizzaProvider>
      <OrderDetailProvider>
        <App />
        </OrderDetailProvider>
      </PizzaProvider>
     
    </BrowserRouter>
  </React.StrictMode>
);
