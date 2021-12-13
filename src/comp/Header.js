import React from 'react';
import {Navbar, Container, Nav , Form , Button , FormControl ,Card} from 'react-bootstrap';
import { EmailIcon , WhatsappIcon } from "react-share";
import { NavLink } from 'react-router-dom';

export default function Header() {
return (
  <Container>
  <Card style={{ backgroundColor:'#eaedf2'  , border : 'none'}}>
    <Card.Img src="assets/logo.jpg" alt="Card image" style={{  margin : '10px', width : '120px'}}/>
    <Card.ImgOverlay style={{textAlign : 'end' ,}}>
      <Card.Title style={{color : '#da1d6f'}}>+212 661-316238<WhatsappIcon size={32} round={true} style={{marginLeft : '10px'}}/></Card.Title>
      <Card.Title style={{color : '#da1d6f' }}>yesprint.ma@gmail.com<EmailIcon size={32} round={true} style={{marginLeft : '10px'}}/></Card.Title>
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

