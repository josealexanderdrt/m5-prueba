import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { OrderDetailContext } from "../context/OrderDetailProvider";         
import { useContext } from "react";


const Navigation = () => {
    const activeClass = ({ isActive }) => (isActive ? "active" : undefined);
    const { totalOrder} = useContext(OrderDetailContext);
  return (
    <>
    
    <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid >
          <Navbar.Brand as={Link} to="/"> 🍕Pizzeria Mamma mia!</Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1">
            <NavLink to="/carrito" className={activeClass+"  text-decoration-none m-3"} >🛒 {"$ "+totalOrder}</NavLink>
            
          </Nav>
        </Container>
      </Navbar>

    
    </>
  )
}

export default Navigation