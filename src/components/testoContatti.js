import React from "react";
import location from "../img/location.png";
import clock from "../img/clock.png";
import telephone from "../img/telephone.png";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import milano from "../img/mi.jpg";
import tempo from "../img/tempo.jpg";
import tel from "../img/preno.jpeg";
import social from "../img/social.jpg";
import linktree from "../img/linktree.png";

import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

class TestoContatti extends React.Component {
    render() {
        return (
            <div className="container-fluid">

               <div class="row photo-grid1 card1-tall card1-wide">
               <div className="card2 imgSize1 sfondoContatti1">Via Rosolino Pilo,20(Ang Via Nino Bixio) - Milano
               </div>
               </div>

               <div class="row photo-grid1 card1-tall card1-wide">
               <div className="card3 imgSize1 sfondoContatti2">Lunedi Domenica:<br/> 12:00/14:30 - 19:30/23:00
               </div>
               </div>

               <div class="row photo-grid1 card1-tall card1-wide">
               <div className="card3 imgSize1 sfondoContatti3" >Per info e prenotazioni contattare il numero:<br/>
               <div style={{color:"#9B111E"}}>02 2940 6526</div>
               </div>
               </div>

               <div class="row photo-grid1 card1-tall card1-wide">
               <div className="card3 imgSize1 sfondoContatti4">I NOSTRI SOCIAL <br/>
               <img src={facebook} alt="Angolo d'Abruzzo" title="Angolo d'Abruzzo" width="40px" height="40px"/>
               <img src={instagram} alt="Angolo d'Abruzzo" title="Angolo d'Abruzzo" width="50px" height="50px"/>
               <img src={linktree} alt="Angolo d'Abruzzo" title="Angolo d'Abruzzo" width="40px" height="40px"/>

               </div>
               </div>



            </div>
        )
    }
}

export default TestoContatti;