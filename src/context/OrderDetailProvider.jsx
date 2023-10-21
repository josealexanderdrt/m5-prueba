import { createContext, useState, useEffect, useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";


export const OrderDetailContext = createContext();
const OrderDetailProvider = ({ children }) => {
  const { pizzas } = useContext(PizzaContext);
  const [orderList, setOrderList] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);

  const updateTotalOrder = () => {
    const total = orderList.reduce(function (acc, obj) {
      return acc + obj.price * obj.quantity;
    }, 0);
    setTotalOrder(total);
  };

  const addToOrderDetail = (id) => {
    if (id) {
      const pizzaEnOrden = orderList.find((pizza) => pizza.id === id);
      if (pizzaEnOrden) {
        console.log("modifica");
        // Crea una copia del array y del objeto que deseas modificar
        const updatedOrderList = [...orderList];
        const updatedPizza = { ...pizzaEnOrden };
        updatedPizza.quantity = updatedPizza.quantity + 1;

        // Reemplaza el objeto en la copia del array
        const index = updatedOrderList.findIndex((pizza) => pizza.id === id);
        updatedOrderList[index] = updatedPizza;
      
        // Actualiza el estado con la copia modificada
        setOrderList(updatedOrderList);
      } else {
        console.log("nueva");
        const addToOrder = pizzas.find((pizza) => pizza.id === id);
        addToOrder.quantity = 1;

        // Agrega el nuevo objeto al array
        const updatedOrderList = [...orderList, addToOrder];
        // Actualiza el estado con la copia modificada
        setOrderList(updatedOrderList);
      }
      
    }
  };

  const minusToOrderDetail = (id) => {
    if (id) {
      const pizzaEnOrden = orderList.find((pizza) => pizza.id === id);
      if (pizzaEnOrden && pizzaEnOrden.quantity === 1) {
        console.log("eliminar");
        // Filtra el objeto a eliminar
        const updatedOrderList = orderList.filter((pizza) => pizza.id !== id);
        setOrderList(updatedOrderList);
      } else {
        console.log("restar");
        // Crea una copia del array y del objeto que deseas modificar
        const updatedOrderList = [...orderList];
        const updatedPizza = { ...pizzaEnOrden };
        updatedPizza.quantity = updatedPizza.quantity - 1;

        // Reemplaza el objeto en la copia del array
        const index = updatedOrderList.findIndex((pizza) => pizza.id === id);
        updatedOrderList[index] = updatedPizza;
        // Actualiza el estado con la copia modificada
        setOrderList(updatedOrderList);
      }
    }
  };

  useEffect(() => {
    updateTotalOrder();
  }, [orderList]);

  return (
    <>
      <OrderDetailContext.Provider
        value={{
          orderList,
          addToOrderDetail,
          minusToOrderDetail,
          totalOrder,
        }}
      >
        {children}
      </OrderDetailContext.Provider>
    </>
  );
};

export default OrderDetailProvider;
