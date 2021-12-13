import React from 'react';
import {Button, Col, Container, Form, FormGroup, Row , Image , InputGroup} from "react-bootstrap";

const Registre = () => {
    return (
            <Container>
                <hr style={{borderRadius : '5px' , border: '2px solid'}}></hr>
                <Row>
                    <Col sm={6} style={{padding : '50px'}}>
                    <div style={{justifyContent : 'center' , display : 'flex' , padding : '20px'}}>
                    <Image src="assets/connect.png" style={{height : '80px' , width : '80px'}}/>
                    </div>
                    <h2 className="text-primary text-center">Inscription</h2>
                    <Form >
                        <Row>
                            <Form.Group  as={Col} md="6" controlId="formBasicEmail" style={{margin : '20px auto 0px auto'}} >
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="email" placeholder="Nom" required/>
                            </Form.Group>
                            <Form.Group as={Col} md="6"  controlId="formBasicEmail" style={{margin : '20px auto 0px auto'}} >
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="email" placeholder="Prénom" required/>
                            </Form.Group>
                        </Row>
                        <Form.Group controlId="formBasicEmail" style={{margin : '20px auto 0px auto'}} >
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="tel" placeholder="Tel" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" style={{margin : '20px auto 0px auto'}} >
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control type="email" placeholder="Email" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" style={{margin : '20px auto 0px auto'}}>
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Mot de passe" required/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword" style={{margin : '20px auto 0px auto'}}>
                            <Form.Label>Confirmer mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Mot de passe" required/>
                        </Form.Group>
                        <FormGroup>
                        <Button variant="primary btn-block"  style={{margin : '20px auto 20px auto' , justifyContent : 'center' , display : 'flex'}} type="submit">
                            S'inscrire
                        </Button>
                        </FormGroup>
                    </Form>
                    </Col>
                    <Col sm={6} style={{padding : '20px'}}>
                    <Image src="assets/signup.png" fluid style={{marginTop : '30%'}}/>
                    </Col>
                </Row>
                <hr style={{borderRadius : '5px' , border: '2px solid'}}></hr>
            </Container>
    );
};

export default Registre;