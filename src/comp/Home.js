import React from "react"
import {Container } from "react-bootstrap";

export default function Home() {
    return (
    <Container>
    <h2>Gallerie</h2>
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
    <hr style={{borderRadius : '5px' , border: '2px solid' , width :'40%' , margin : '10px auto 10px auto'}}></hr>
    </Container>
    );
}