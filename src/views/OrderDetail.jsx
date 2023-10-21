import { PizzaContext } from '../context/PizzaProvider'
import { OrderDetailContext } from "../context/OrderDetailProvider";
import { useContext,useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";

const OrderDetail = () => {
  const { pizzas, setPizzas } = useContext(PizzaContext);
  const { orderList, addToOrderDetail,minusToOrderDetail, totalOrder} = useContext(OrderDetailContext);

  return (
    <>
      <div className="gallery grid-columns-5 p-3">
        {orderList.map((pizza, i) => (
          <div key={i}>
            <div style={{ backgroundImage: `url(${pizza.img})` }}>
              sss
            </div>
          <div>
            <h1>{pizza.name}</h1>
            <div>
              {pizza.price*pizza.quantity}
            </div>
            <div>
              {pizza.quantity}
            </div>       
          </div>
          <Button
                    variant="dark"
                    className="m-1 p-1"
                    onClick={() => addToOrderDetail(pizza.id)}
                  >
                    +
                  </Button>
                  <Button
                    variant="dark"
                    className="m-1 p-1"
                    onClick={() => minusToOrderDetail(pizza.id)}
                  >
                    -
                  </Button>
          </div>
        ))}
        Total: {totalOrder}
      </div>
     
      
    </>
  );
}

export default OrderDetail