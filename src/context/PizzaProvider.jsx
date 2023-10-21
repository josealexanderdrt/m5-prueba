import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PizzaContext = createContext();
const URL = "src/assets/pizzas.json";
const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const response = await axios.get(URL);
      if (response.status !== 200) {
        throw new Error("No hay Data");
    
      }
      setPizzas(response.data)
    
    } catch (error) {
        console.log(error.message)
    }
  };

  useEffect(()=>{
    getPizzas()
  }, [])


  return (
  <>
  
  <PizzaContext.Provider value={{
    pizzas,
    setPizzas
  }} >

    {children}
  </PizzaContext.Provider>
  
  </>);
};

export default PizzaProvider;
