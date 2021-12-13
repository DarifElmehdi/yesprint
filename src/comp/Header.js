import React from 'react';
import {Navbar, Container, Nav , Form , Button , FormControl ,Card} from 'react-bootstrap';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

export default function Header() {
return (
  <Container>
  <Card style={{ backgroundColor:'#eaedf2'  , border : 'none'}}>
    <Card.Img src="assets/logo.jpg" alt="Card image" style={{ width : '150px'}}/>
    <Card.ImgOverlay style={{textAlign : 'end' ,}}>
      <Card.Title style={{ marginRight : '75px' ,color : '#0093d6'}}><TelephoneFill/> +212-658181469</Card.Title>
      <Card.Title style={{ marginRight : '0px' ,color : '#0093d6' }}><EnvelopeFill/> yesprint.ma@gmail.com</Card.Title>
    </Card.ImgOverlay>
  </Card>
  <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#eaedf2'}} sticky="top">
    <Container>
    <Navbar.Brand href="/">
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
      >
        <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
        <Nav.Link as={NavLink} to="/products">Produit</Nav.Link>
        <Nav.Link as={NavLink} to="/services">Service</Nav.Link>
        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
        <Nav.Link as={NavLink} to="/connect">Se Connecter</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Rechercher"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Rechercher</Button>
      </Form>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </Container>
  );
}

