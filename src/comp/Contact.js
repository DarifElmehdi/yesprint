import React from 'react';
import {Button, Col, Container, Form, FormGroup, Row , Image , Nav} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
const Contact = () => {
    return (
            <Container>
                <hr style={{borderRadius : '5px' , border: '2px solid'}}></hr>
                <Row>
                    <Col sm={6} style={{padding : '100px'}}>
                    <Image src="assets/contact-us.jpg" fluid/>
                    </Col>
                    <Col sm={6} style={{padding : '50px'}}>
                    <div style={{justifyContent : 'center' , display : 'flex' , padding : '20px'}}>
                    <Image src="assets/contact.jpg" style={{ borderRadius : '50%',height : '80px' , width : '80px'}}/>
                    </div>
                    <h2 className="text-primary text-center">Nous Contacter</h2>
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
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" style={{margin : '20px auto 0px auto'}}>
                            <Form.Label>Votre message</Form.Label>
                            <Form.Control as="textarea" placeholder="Message" />
                        </Form.Group>
                        <Form.Check style={{margin : '20px auto 0px auto'}}
                            type="switch"
                            id="custom-switch"
                            label="Recevoir l'email"
                        />
                        <FormGroup>
                        <Button variant="primary btn-block"  style={{margin : '20px auto 20px auto' , justifyContent : 'center' , display : 'flex'}} type="submit">
                            Envoyer
                        </Button>
                        </FormGroup>
                    </Form>
                    </Col>
                </Row>
                <hr style={{borderRadius : '5px' , border: '2px solid'}}></hr>
            </Container>
    );
};

export default Contact;