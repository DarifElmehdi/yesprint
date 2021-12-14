import React from "react"
import { Container } from "react-bootstrap";

export default function Footer() {
    return (
    <Container>
    <footer style={{backgroundColor:'#D9D9D9'}}>
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4" >
          <h5 class="mb-3" style={{letterSpacing: '2px',color :'#262626'}} >Imprimerie YES PRINT</h5>
          <hr style={{borderRadius : '5px' , border: '2px solid'}}></hr>
          <p style={{color :'#262626'}}>
          Services disponibles: Achats en magasin · Retrait en magasin · Livraison<br/>
          Adresse : Massira 3 N° 707 Bloc A, 40140<br/>
          Téléphone : +212 661-316238
          </p>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-3" style={{letterSpacing: '2px',color :'#262626'}} >Liens Utilies</h5>
          <hr style={{borderRadius : '5px' , border: '2px solid'}}></hr>
          <ul class="list-unstyled mb-0">
            <li class="mb-1">
              <a href="/" style={{color :'#262626' , textDecoration : 'none'}} >FAQ</a>
            </li>
            <li class="mb-1">
              <a href="/" style={{color :'#262626'  , textDecoration : 'none'}}>Livraison</a>
            </li>
            <li class="mb-1">
              <a href="/" style={{color :'#262626' , textDecoration : 'none'}}>Prix</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 mb-4">
          <h5 class="mb-1" style={{letterSpacing: '2px',color :'#262626'}}>Horaires d'ouvertures</h5>
          <hr style={{borderRadius : '5px' , border: '2px solid'}}></hr>
          <table class="table" style={{color :'#262626'}}>
            <tbody>
              <tr>
                <td>Lun - Ven:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Sam - Dim:</td>
                <td>8am - 1am</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="text-center p-3"  style={{backgroundColor:'#8C8C8C'}}>
      © 2021 Copyright : {'  '}
      <a class="text-dark" href="/">YESPRINT </a>
    </div>
  </footer>
  </Container>
  );
}