import React from 'react';
import {Button, Col, Container, Form, FormGroup, Row , Image} from "react-bootstrap";

const Connect = () => {
    return (
            <Container>
                <hr style={{borderRadius : '5px' , border: '2px solid'}}></hr>
                <Row>
                    <Col sm={6} style={{padding : '100px'}}>
                    <Image src="assets/login.png" fluid/>
                    </Col>
                    <Col sm={6} style={{padding : '50px'}}>
                    <div style={{justifyContent : 'center' , display : 'flex' , padding : '20px'}}>
                    <Image src="assets/connect.png" style={{height : '80px' , width : '80px'}}/>
                    </div>
                    <h2 className="text-primary text-center"> Authentification</h2>
                    <Form >
                        <Form.Group controlId="formBasicEmail" style={{margin : '20px auto 0px auto'}} >
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" style={{margin : '20px auto 0px auto'}}>
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control type="password" placeholder="Pass" />
                        </Form.Group>
                        <Form.Check style={{margin : '20px auto 0px auto'}}
                            type="switch"
                            id="custom-switch"
                            label="Mémoriser les informations"
                        />
                        <FormGroup>
                        <Button variant="primary btn-block"  style={{margin : '20px auto 20px auto' , justifyContent : 'center' , display : 'flex'}} type="submit">
                            Se connecter
                        </Button>
                        </FormGroup>
                        <a href="/" style={{color :'#000' , textDecoration : 'none'}} >Mot de passe oublié ?</a><br/>
                        <a href="inscrit" style={{color :'#262626' , textDecoration : 'none'}} >Vous n'avez pas de compte ? S'inscrire</a>
                    </Form>
                    </Col>
                </Row>
                <hr style={{borderRadius : '5px' , border: '2px solid'}}></hr>
            </Container>
    );
};

export default Connect;