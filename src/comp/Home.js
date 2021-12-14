import React from "react"
import {Container ,Image , Card , CardGroup , Row , Col} from "react-bootstrap";
import { FacebookIcon , TwitterIcon , EmailIcon , WhatsappIcon } from "react-share";
export default function Home() {
    return (
    <Container>
    <Image src="assets/banner-t.jpg" fluid />
    <h3 style={{textAlign : 'center'}}>Gallerie</h3>
    <hr style={{borderRadius : '5px' , border: '2px solid' , width :'40%' , margin : '10px auto 10px auto'}}></hr>
    <div class="row">
    <div class="col-lg-4 mb-4 mb-lg-0">
        <img
        src="assets/05.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Waves at Sea"
        />

        <img
        src="assets/06.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Yosemite National Park"
        />
    </div>
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
        src="assets/01.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
        />

        <img
        src="assets/02.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Wintry Mountain Landscape"
        />
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
        <img
        src="assets/03.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Mountains in the Clouds"
        />

        <img
        src="assets/04.jpg"
        class="w-100 shadow-1-strong rounded mb-4"
        alt="Boat on Calm Water"
        />
    </div>
    </div>
    <br/>
    <h3 style={{textAlign : 'center'}}>Personnel</h3>
    <hr style={{borderRadius : '5px' , border: '2px solid' , width :'40%' , margin : '10px auto 10px auto'}}></hr>
    <CardGroup>
    <Card style={{margin : '10px' , border: '1px solid #fec02f' , borderRadius :  '20px 20px 0 0 '}}>
        <Card.Img variant="top" src="assets/jamal.jpg" style={{borderRadius : '50%' , border: '2px solid #0093d6' , width :'60%' , margin : '10px auto 10px auto'}}/>
        <Card.Body>
        <Card.Title>JAMAL BAHADOU</Card.Title>
        <Card.Text>
            Infographiste et Developpeur web chez YESPRINT.
        </Card.Text>
        </Card.Body>
        <Card.Footer style={{justifyContent : 'end' , display : 'flex'}}>
        <FacebookIcon size={40} round={true} style={{marginRight : '10px'}}/><TwitterIcon size={40} round={true} style={{marginRight : '10px'}}/><EmailIcon size={40} round={true} style={{marginRight : '10px'}}/><WhatsappIcon size={40} round={true} style={{marginRight : '10px'}}/>
        </Card.Footer>
    </Card>
    <Card style={{margin : '10px' , border: '1px solid #fec02f' , borderRadius :  '20px 20px 0 0 '}}>
        <Card.Img variant="top" src="assets/rachad.jpg" style={{borderRadius : '50%' , border: '2px solid #0093d6' , width :'60%' , margin : '10px auto 10px auto'}}/>
        <Card.Body>
        <Card.Title>RACHAD BAHADOU</Card.Title>
        <Card.Text>
            Proprietaire et Derictor général de YESPRINT
        </Card.Text>
        </Card.Body>
        <Card.Footer style={{justifyContent : 'end' , display : 'flex'}}>
        <FacebookIcon size={40} round={true} style={{marginRight : '10px'}}/><TwitterIcon size={40} round={true} style={{marginRight : '10px'}}/><EmailIcon size={40} round={true} style={{marginRight : '10px'}}/><WhatsappIcon size={40} round={true} style={{marginRight : '10px'}}/>
        </Card.Footer>
    </Card>
    </CardGroup>
    <br/>
    <h3 style={{textAlign : 'center'}}>Localisation et RS</h3>
    <hr style={{borderRadius : '5px' , border: '2px solid' , width :'40%' , margin : '10px auto 10px auto'}}></hr>
    <Row>
        <Col sm={8}>
        <iframe src="https://maps.google.com/maps?q=Massira%203%20N%C2%B0%20707%20Bloc%20A,%2040140&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{width :'100%', height : '500px',  frameborder :"2px"}} allowfullscreen></iframe>
        </Col>
        <Col sm={4}>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fyesprint.ma%2F%3F_rdc%3D1%26_rdr&tabs=timeline&width=420&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" style={{width :'100%', height : '500px',  frameborder :"5px"}} allowfullscreen></iframe>
        </Col>
    </Row>
    <Image src="assets/banner-b.jpg" fluid />
    </Container>
    );
}

