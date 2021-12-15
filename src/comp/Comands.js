import React from 'react';
import {Button, Col, Container, Card, Row , Image , Form , FormGroup } from "react-bootstrap";
const Comands = () => {
    return (
        <Container>
        <Image src="assets/banner-t.jpg" fluid />
        <h3 style={{textAlign : 'center'}}>Suivie des commande</h3>
        <hr style={{borderRadius : '5px' , border: '2px solid' , width :'40%' , margin : '10px auto 10px auto'}}></hr>
        <Row>
            <Col md={{span : 10 , offset : 1}}>
            <Card style={{margin : '0px 10px 10px 0px' , padding : '10px' , border : 'none' }}>
                <Row>
                    <Col sm={4} style={ {display : 'flex' , alignItems : 'center'}}>
                        <Card.Img variant="top" src="assets/brochure.jpg" />
                    </Col>
                    <Col sm={8}>
                    <Card.Body>
                    <Form >
                        <Form.Group style={{margin : '20px auto 0px auto'}} >
                        <Form.Label>Choix de papier</Form.Label>
                        <Form.Select label="Default select example">
                        <option>Selectionner type de papier</option>
                        <option value="1">135 gr Couché brillant : Le meilleur rapport qualité prix  </option>
                        <option value="2">170 gr Couché brillant ou Satimat : Le papier souple résistant  </option>
                        <option value="3">Le 90 gr Offset : Le papier bureautique  </option>
                        <option value="4">Le papier Recyclé </option>
                        </Form.Select>
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                            <Form.Group style={{margin : '20px auto 0px auto'}} >
                                <Form.Label>Taille</Form.Label>
                                <Form.Select label="Default select example">
                                <option>Selectionner la taille</option>
                                <option value="1">A1 : 594 x 841 mm</option>
                                <option value="2">A2 : 420 x 594 mm</option>
                                <option value="3">A3 : 297 x 420 mm</option>
                                <option value="4">A4 : 210 x 297 mm</option>
                                <option value="5">A5 : 148 x 210 mm</option>
                                </Form.Select>
                            </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group style={{margin : '20px auto 0px auto'}} >
                                <Form.Label>Format</Form.Label>
                                <Form.Select label="Default select example">
                                <option>Selectionner le Format</option>
                                <option value="1">1 pli centrale</option>
                                <option value="1">2 plis accordéon </option>
                                <option value="1">3 plis accordéon </option>
                                <option value="1">4 plis accordéon </option>
                                <option value="1">2 plis roulés </option>
                                <option value="1">3 plis roulés </option>
                                <option value="1">2 pli fenêtre </option>
                                <option value="1">3 pli portefeuille </option>
                                </Form.Select>
                            </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group style={{margin : '20px auto 0px auto'}} >
                                <Form.Label>Quantité</Form.Label>
                                <Form.Select label="Default select example">
                                <option>Selectionner la quantité</option>
                                <option value="1">10</option>
                                <option value="2">50</option>
                                <option value="3">100</option>
                                <option value="4">200</option>
                                <option value="5">500</option>
                                <option value="6">1000</option>
                                </Form.Select>
                            </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group controlId="formBasicEmail" style={{margin : '20px auto 0px auto'}} >
                                <Form.Label>Téléphone</Form.Label>
                                <Form.Control type="email" placeholder="Télé" />
                            </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formBasicEmail" style={{margin : '20px auto 0px auto'}} >
                                <Form.Label>Adresse</Form.Label>
                                <Form.Control type="email" placeholder=" Massira 3 N° 707 Bloc A, 40140" />
                            </Form.Group>
                        <Form.Group formFileMultiple style={{margin : '20px auto 0px auto'}}>
                            <Form.Label>Ajouter votre design</Form.Label>
                            <Form.Control type="file"/>
                        </Form.Group>
                        <Form.Check style={{margin : '20px auto 0px auto'}}
                            type="switch"
                            id="custom-switch"
                            label="Recevoir l'email"
                        />
                        <FormGroup>
                        <Button variant="primary btn-block"  style={{margin : '20px auto 20px auto' , justifyContent : 'center' , display : 'flex'}} type="submit">
                            Valider la commande
                        </Button>
                        </FormGroup>
                    </Form>
                    </Card.Body>
                    </Col>
                </Row>
                
            </Card>
            </Col>
        </Row>
        <Image src="assets/banner-b.jpg" fluid />
        </Container>
    );
};

export default Comands;