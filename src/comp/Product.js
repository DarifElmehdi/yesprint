import React from "react"
import { CardGroup , Card, Container , Button} from "react-bootstrap";

export default function Product() {
    return (
    <Container>
    <br/>
    <CardGroup >
    <Card style={{margin : '10px' , padding : '10px' , border: '1px solid #0093d6' , borderRadius :  '20px '}}>
        <Card.Img variant="top" src="assets/card.jpg" style={{borderRadius : '20px' , border: '1px solid #da1d6f'}} />
        <Card.Body>
        <Card.Title>Carte de visite</Card.Title>
        <Card.Text>
        Nous imprimons vos cartes de visite exclusivement sur un papier haute qualité avec laque de protection.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} >Comander</Button>
        </Card.Body>
    </Card>
    <Card style={{margin : '10px' , padding : '10px' , border: '1px solid #0093d6' , borderRadius :  '20px '}}>
        <Card.Img variant="top" src="assets/cup.jpg"style={{borderRadius : '20px' , border: '1px solid #da1d6f'}} />
        <Card.Body>
        <Card.Title>Mug personnalisé</Card.Title>
        <Card.Text>
        Personnalisez la tasse avec la définition de votre choix pour un cadeau unique et personnel.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} >Comander</Button>
        </Card.Body>
    </Card>
    </CardGroup>
    <CardGroup>
    <Card style={{margin : '10px' , padding : '10px' , border: '1px solid #0093d6' , borderRadius :  '20px '}}>
        <Card.Img variant="top" src="assets/tshirt.jpg"style={{borderRadius : '20px' , border: '1px solid #da1d6f'}}/>
        <Card.Body>
        <Card.Title>La Sérigraphie</Card.Title>
        <Card.Text>
        Avec la sérigraphie personnaliser vos T-SHIRTS  avec des designs de vos choix pour un cadeau unique.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} >Comander</Button>
        </Card.Body>
        
    </Card>
    <Card style={{margin : '10px' , padding : '10px' , border: '1px solid #0093d6' , borderRadius :  '20px '}}>
        <Card.Img variant="top" src="assets/brochure.jpg"style={{borderRadius : '20px' , border: '1px solid #da1d6f'}}/>
        <Card.Body>
        <Card.Title>Brochure</Card.Title>
        <Card.Text>
        Des brochures d'information pour vos clients en passant par les magazines en papier glacé.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} >Comander</Button>
        </Card.Body>
        
    </Card>
    </CardGroup>
    <CardGroup>
    <Card style={{margin : '10px' , padding : '10px' , border: '1px solid #0093d6' , borderRadius :  '20px '}}>
        <Card.Img variant="top" src="assets/flyer.jpg"style={{borderRadius : '20px' , border: '1px solid #da1d6f'}}/>
        <Card.Body>
        <Card.Title>Tract</Card.Title>
        <Card.Text>
        La publicité professionnelle et ciblée en un clin d'œil : imprimez ici en quelques étapes vos nouveaux flyers.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} >Comander</Button>
        </Card.Body>
        
    </Card>
    <Card style={{margin : '10px' , padding : '10px' , border: '1px solid #0093d6' , borderRadius :  '20px '}}>
        <Card.Img variant="top" src="assets/poster.jpg" style={{borderRadius : '20px' , border: '1px solid #da1d6f'}} />
        <Card.Body>
        <Card.Title>Poster</Card.Title>
        <Card.Text>
        Des posters innovant avec des designs creative et prix imbattables seulement chez YESPRINT.
        </Card.Text>
        <Button variant="primary" style={{float : 'right'}} >Comander</Button>
        </Card.Body>
        
    </Card>
    </CardGroup>
    <hr style={{borderRadius : '5px' , border: '2px solid ', width :'40%' , margin : '10px auto 10px auto'}}></hr>
    </Container>
    );
}