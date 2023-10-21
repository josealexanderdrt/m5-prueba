import { useParams } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import { PizzaContext } from "../context/PizzaProvider";
import { OrderDetailContext } from "../context/OrderDetailProvider";
import { Card, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PizzaDetail = () => {
    const { idPizza } = useParams();
    const { pizzas, formatNumber } = useContext(PizzaContext);
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
     <div className="boxPizzaSelected">
    {pizzaSelected?(
          <Container className=" boxPizzaSelected d-flex">
            <Card style={{ width: "28rem" }}>
              <Card.Img
                variant="bot"
                src={pizzaSelected.img}
                alt={"Pizza " + pizzaSelected.name}
              />
              <Card.Body>
                <Card.Title>{pizzaSelected.name} </Card.Title>
                <hr />
                <Card.Text>
                  {pizzaSelected.desc}
                </Card.Text>

                <Card.Text>
                  <strong> Ingredientes</strong>
                      </Card.Text>
                  <ul>
                    {pizzaSelected.ingredients.map((ingredient, j) => (
                      <li key={j}> { ingredient} </li>
                    ))}
                  </ul>
                  <Card.Text
                className="text-center">
                  <strong>{formatNumber(pizzaSelected.price)}</strong> 
                    </Card.Text>
                <Container className="d-flex">
                  <Button
                     variant="dark"
                     className="m-1 p-1 wbutton"
                    onClick={() => addToOrderDetail(pizzaSelected.id)}
                  >
                    Añadir🛒
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