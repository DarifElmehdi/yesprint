import React from 'react';
import {Button, Col, Container, Form, FormControl, Row ,Image , Card , ProgressBar} from "react-bootstrap";
const Check = () => {
    return (
        <Container>
        <Image src="assets/banner-t.jpg" fluid />
        <h3 style={{textAlign : 'center'}}>Suivi de commande</h3>
        <hr style={{borderRadius : '5px' , border: '2px solid' , width :'40%' , margin : '10px auto 10px auto'}}></hr>
        <Row>
            <Col md={{ span: 6, offset: 3 }}>
            <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Entrer l'identifiant de la commande"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-primary">Rechercher</Button>
            </Form>
            </Col>
            <Col md={{span : 10 , offset : 1}}>
            <hr style={{borderRadius : '5px' , border: '2px solid' , width :'100%' , margin : '20px auto 10px auto'}}></hr>
            <Card style={{border: 'none' , margin : '20px auto 10px auto' }}>
                <Row>
                    <Col sm={4}>
                        <Card.Img variant="top" src="assets/card.jpg"  style={{border: 'none' }}/>
                    </Col>
                    <Col sm={8}>
                    <Card.Body>
                    <Card.Title><strong style={{ color : '#0093d6'}}>Produit :</strong> Carte de visite</Card.Title>
                    <Card.Title><strong style={{ color : '#0093d6'}}>Quantité :</strong> 300 cartes</Card.Title>
                    <Card.Title><strong style={{ color : '#0093d6'}}>Commander le  :</strong> 12/12/2021 - 10:32 </Card.Title>
                    <Card.Title><strong style={{ color : '#0093d6'}}>Design :</strong> Externe </Card.Title>
                    <ProgressBar animated now={50}  style={{height : '20px' ,margin : '20px 0 10px 0'}} />
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

export default Check;