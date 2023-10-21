import { createContext, useState, useEffect, useContext } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { toast } from "react-toastify";

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
        const updatedOrderList = [...orderList];
        const updatedPizza = { ...pizzaEnOrden };
        updatedPizza.quantity = updatedPizza.quantity + 1;
        const index = updatedOrderList.findIndex((pizza) => pizza.id === id);
        updatedOrderList[index] = updatedPizza;

        setOrderList(updatedOrderList);
        toast("Agregada 🛒🍕 1 " + updatedPizza.name);
      } else {
        console.log("nueva");
        const addToOrder = pizzas.find((pizza) => pizza.id === id);
        addToOrder.quantity = 1;

        const updatedOrderList = [...orderList, addToOrder];

        setOrderList(updatedOrderList);
        toast("Agregada 🛒🍕 1 " + addToOrder.name);
      }
    }
  };

  const minusToOrderDetail = (id) => {
    if (id) {
      const pizzaEnOrden = orderList.find((pizza) => pizza.id === id);
      if (pizzaEnOrden && pizzaEnOrden.quantity === 1) {
        console.log("eliminar");
        const updatedOrderList = orderList.filter((pizza) => pizza.id !== id);
        setOrderList(updatedOrderList);
        toast(
          "⚠️Eliminaste Todas Las Pizza " +
            pizzaEnOrden.name +
            " vuelve a seleccionar una pizza"
        );
      } else {
        console.log("restar");

        const updatedOrderList = [...orderList];
        const updatedPizza = { ...pizzaEnOrden };
        updatedPizza.quantity = updatedPizza.quantity - 1;

        const index = updatedOrderList.findIndex((pizza) => pizza.id === id);
        updatedOrderList[index] = updatedPizza;

        setOrderList(updatedOrderList);
        toast("✖️Eliminaste 1 pizza " + pizzaEnOrden.name);
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
