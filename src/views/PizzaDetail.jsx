import { useParams } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { OrderDetailContext } from "../context/OrderDetailProvider";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PizzaDetail = () => {
    const { idPizza } = useParams();
    const { pizzas, setPizzas } = useContext(PizzaContext);
    const { addToOrderDetail} = useContext(OrderDetailContext);


    const [pizzaSelected, setPizzaSelected] = useState();
    const getPizzaSelected =  (idPizza) => {
       const pizzaFind = pizzas.find((pizza) => pizza.id===idPizza);
        setPizzaSelected(pizzaFind);
    };
  
  useEffect(() =>{
    getPizzaSelected(idPizza);
  }, [idPizza]);

  return (
    <>
     <div className="">
    {pizzaSelected?(
          <Container className="">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={pizzaSelected.img}
                alt={"Pizza " + pizzaSelected.name}
              />
              <Card.Body>
                <Card.Title>{pizzaSelected.name} </Card.Title>
                <Card.Text>
                  <strong> Ingredientes</strong>
                      </Card.Text>
                  <ul>
                    {pizzaSelected.ingredients.map((ingredient, j) => (
                      <li key={j}> {ingredient} </li>
                    ))}
                  </ul>
                <Card.Text>{pizzaSelected.price}</Card.Text>
                <Container className="d-flex">
                  <Button
                    variant="primary"
                    className="m-1 p-1"
                    onClick={() => addToOrderDetail(pizzaSelected.id)}
                  >
                    Añadir
                  </Button>
                </Container>
              </Card.Body>
            </Card>
          </Container>
    ):(<></>)
}

      </div>
    
    </>
  )
}

export default PizzaDetail