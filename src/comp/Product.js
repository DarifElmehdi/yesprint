import React from "react"
import { CardGroup ,Image , Card, Container , Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Product() {
    return (
    <Container>
    <Image src="assets/banner-t.jpg" fluid />
    <h3 style={{textAlign : 'center'}}>Produits</h3>
    <hr style={{borderRadius : '5px' , border: '2px solid' , width :'40%' , margin : '10px auto 10px auto'}}></hr>
    <CardGroup >
    <Card style={{ margin : '0px 10px 10px 0px' , padding : '10px' , border : 'none'}}>
        <Card.Img variant="top" src="assets/card.jpg"  />
        <Card.Body>
        <Card.Title style={{textAlign : 'center'}}>Carte de visite</Card.Title>
        <Card.Text>
        Nous imprimons vos cartes de visite exclusivement sur un papier haute qualité .
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} as={NavLink} to="/comand" >Comander</Button>
        </Card.Body>
    </Card>
    <Card style={{ margin : '0px 10px 10px 0px' , padding : '10px' , border : 'none'}}>
        <Card.Img variant="top" src="assets/cup.jpg" />
        <Card.Body>
        <Card.Title style={{textAlign : 'center'}}>Mug personnalisé</Card.Title>
        <Card.Text>
        Personnalisez la tasse avec la définition de votre choix pour un cadeau unique et personnel.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} as={NavLink} to="/comand" >Comander</Button>
        </Card.Body>
    </Card>
    <Card style={{ margin : '0px 10px 10px 0px' , padding : '10px' , border : 'none'}}>
        <Card.Img variant="top" src="assets/tshirt.jpg"/>
        <Card.Body>
        <Card.Title style={{textAlign : 'center'}}>La Sérigraphie</Card.Title>
        <Card.Text>
        Avec la sérigraphie personnaliser vos T-SHIRTS  avec des designs de vos choix pour un cadeau unique.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} as={NavLink} to="/comand" >Comander</Button>
        </Card.Body>
        
    </Card>
    </CardGroup>

    <CardGroup>
    <Card style={{ margin : '0px 10px 10px 0px' , padding : '10px' , border : 'none'}}>
        <Card.Img variant="top" src="assets/brochure.jpg"/>
        <Card.Body>
        <Card.Title style={{textAlign : 'center'}}>Brochure</Card.Title>
        <Card.Text>
        Des brochures d'information pour vos clients en passant par les magazines en papier glacé.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} as={NavLink} to="/comand" >Comander</Button>
        </Card.Body>
        
    </Card>
    <Card style={{margin : '0px 10px 10px 0px' , padding : '10px' , border : 'none'}}>
        <Card.Img variant="top" src="assets/flyer.jpg"/>
        <Card.Body>
        <Card.Title style={{textAlign : 'center'}}>Tract</Card.Title>
        <Card.Text>
        La publicité professionnelle et ciblée en un clin d'œil imprimez ici en quelques étapes.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} as={NavLink} to="/comand" >Comander</Button>
        </Card.Body>
        
    </Card>
    <Card style={{ margin : '0px 10px 10px 0px' , padding : '10px' , border : 'none'}}>
        <Card.Img variant="top" src="assets/poster.jpg"  />
        <Card.Body>
        <Card.Title style={{textAlign : 'center'}}>Poster</Card.Title>
        <Card.Text>
        Des posters innovant avec des designs creative et prix imbattables seulement chez YESPRINT.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} as={NavLink} to="/comand" >Comander</Button>
        </Card.Body>
        
    </Card>
    </CardGroup>
    <Image src="assets/banner-b.jpg" fluid />
    </Container>
    );
}