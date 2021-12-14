import React from 'react';
import {Container,Image , CardGroup, Card} from "react-bootstrap";
const Service = () => {
    return (
        <Container>
            <Image src="assets/banner-t.jpg" fluid />
            <h3 style={{textAlign : 'center'}}>Services</h3>
            <hr style={{borderRadius : '5px' , border: '2px solid' , width :'40%' , margin : '10px auto 10px auto'}}></hr>
            <CardGroup>
            <Card  style={{ margin : '0px 10px 10px 0px' , padding : '10px' , border: 'none' }}>
                <Card.Img variant="top" src="assets/GF.jpg" />
                <Card.Body>
                <Card.Title style={{textAlign : 'center'}}>Design Graphique</Card.Title>
                <Card.Text>
                    Laissez-nous concevoir votre prochain projet d'impression !
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ margin : '0px 10px 10px 0px' , padding : '10px' , border: 'none'}}>
                <Card.Img variant="top" src="assets/PR.jpg" />
                <Card.Body>
                <Card.Title style={{textAlign : 'center'}}>Impression</Card.Title>
                <Card.Text>
                    Nous donnerons vie à toutes vos idées créatives!
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ margin : '0px 10px 10px 0px' , padding : '10px' , border: 'none'}}>
                <Card.Img variant="top" src="assets/DV.jpg" />
                <Card.Body>
                <Card.Title style={{textAlign : 'center'}}>Livraison</Card.Title>
                <Card.Text>
                Livraison, nous pouvons tout remettre pour vous!
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ margin : '0px 10px 10px 0px' , padding : '10px' , border: 'none'}}>
                <Card.Img variant="top" src="assets/GA.jpg" />
                <Card.Body >
                <Card.Title style={{textAlign : 'center'}}>Assistance Graphique</Card.Title>
                <Card.Text>
                Nous vous assistons pour réaliser vos designs!
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            <br/>
            <h3 style={{textAlign : 'center'}}>L'impression est aussi facile</h3>
            <hr style={{borderRadius : '5px' , border: '2px solid' , width :'40%' , margin : '10px auto 10px auto'}}></hr>
            <CardGroup >
            <Card  style={{ margin : '70px 0px 0px 0px'}}>
                <div style={{justifyContent : 'center' , display : 'flex' }}>
                <Card.Img style={{borderRadius : '50%' , width : '30%' , marginTop : '-60px' }} src="assets/select.png" />
                </div>
                <Card.Body>
                <Card.Title style={{textAlign : 'center'}}>Select Produit</Card.Title>
                <Card.Title style={{textAlign : 'center' , color : '#0093d6'}}>01</Card.Title>
                <Card.Text>
                Choisissez les options que vous souhaitez pour vos impressions.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ margin : '70px 0px 0px 0px' }}>
                <div style={{justifyContent : 'center' , display : 'flex' }}>
                <Card.Img style={{borderRadius : '50%', width : '30%' , marginTop : '-60px'}} src="assets/upload.png" />
                </div>
                <Card.Body>
                <Card.Title style={{textAlign : 'center'}}>Téléchargez votre Design</Card.Title>
                <Card.Title style={{textAlign : 'center' , color : '#dc1f71'}}>02</Card.Title>
                <Card.Text>
                Téléchargez votre design fini ici et nous l'imprimerons pour vous avec vos choix
                </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ margin : '70px 0px 0px 0px'  }}>
                <div style={{justifyContent : 'center' , display : 'flex' }}>
                <Card.Img style={{borderRadius : '50%', width : '30%' , marginTop : '-60px'}} src="assets/order.png" />
                </div>
                <Card.Body>
                <Card.Title style={{textAlign : 'center'}}>Caisse et commande</Card.Title>
                <Card.Title style={{textAlign : 'center' , color : '#fec02f'}}>03</Card.Title>
                <Card.Text>
                Passez à la caisse et terminez votre commande très facilement.
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            <br/>
            <Image src="assets/banner-b.jpg" fluid />
        </Container>
    );
};

export default Service;