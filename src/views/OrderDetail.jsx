import { PizzaContext } from "../context/PizzaProvider";
import { OrderDetailContext } from "../context/OrderDetailProvider";
import { useContext, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";

const OrderDetail = () => {
  const { formatNumber } = useContext(PizzaContext);
  const { orderList, addToOrderDetail, minusToOrderDetail, totalOrder } =
    useContext(OrderDetailContext);

  return (
    <>
      <Container >
        <h3>Detalle del Pedido</h3>
        {orderList.map((pizza, i) => (
          <section key={i} className="boxOrderDetail row-gap">
            <figure
              style={{ backgroundImage: `url(${pizza.img})` }}
              className="boxOrderDetaiImg m-1"
            ></figure>
            <article className="m-1"> 
              <h4>{pizza.name}</h4>
              <h6>El Precio de esta pizza es:{" "} {formatNumber(pizza.price)}</h6>
            </article>
            
            
            <Button
              variant="dark"
              className="m-1 p-1 wbutton"
              onClick={() => addToOrderDetail(pizza.id)}
            >
              +
            </Button>
            <div className="text-center">
              <h6>Und</h6>
              <h6>{pizza.quantity}</h6></div>

              <div>
                
                {formatNumber(pizza.price * pizza.quantity)}</div>
            <Button
              variant="dark"
              className="m-1 p-1 wbutton"
              onClick={() => minusToOrderDetail(pizza.id)}
            >
              -
            </Button>
          </section>
        ))}
        <section>
          <h3>Total</h3>
        <h3>{formatNumber(totalOrder)}</h3> 
        </section>
      </Container>
    </>
  );
};

export default OrderDetail;
