import { useContext, useState } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { OrderDetailContext } from "../context/OrderDetailProvider";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PizzaList = () => {
  const { pizzas, setPizzas } = useContext(PizzaContext);
  const { orderList, addToOrderDetail } = useContext(OrderDetailContext);


const navigate = useNavigate()
const goToPizzaDetail = (idPizza) =>{
    navigate(`/pizza/${idPizza}`)
}

  

  return (
    <>
      <div className="gallery grid-columns-3 p-3">
        {pizzas.map((pizza, i) => (

            <Card key={i} style={{ width: "18rem" }} className="">
              <Card.Img
                variant="top"
                src={pizza.img}
                alt={"Pizza " + pizza.name}
              />
              <Card.Body>
                <Card.Title>{pizza.name} </Card.Title>
                <Card.Text>
                  <strong> Ingredientes</strong>
                      </Card.Text>
                  <ul>
                    {pizza.ingredients.map((ingredient, j) => (
                      <li key={j}> {ingredient} </li>
                    ))}
                  </ul>
                <Card.Text>{pizza.price}</Card.Text>

                <Container className="d-flex">
                  <Button variant="dark" className="m-1 p-1"
                    onClick={() => goToPizzaDetail(pizza.id)}>
                    Ver Más
                  </Button>
                  <Button
                    variant="dark"
                    className="m-1 p-1"
                    onClick={() => addToOrderDetail(pizza.id)}
                  >
                    Añadir
                  </Button>
                </Container>
              </Card.Body>
            </Card>
         
        ))}
      </div>
    </>
  );
};

export default PizzaList;
