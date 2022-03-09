import React from "react";
import $ from "jquery";
import ScaleText from "react-scale-text";

import michelin from "../img/michelin.jpg";
import mich from "../img/mich.png";
import guida from "../img/guidaMichelin.png";
import gambero from "../img/gambero.png";
import espresso from "../img/espresso.png";
import slurpy from "../img/slurpy.png";
import guru from "../img/guru.png";

import GalleriaLogo from "./galleriaLogo";

import Table from 'react-bootstrap/Table'
class Testocarosello extends React.Component {


    render() {

        return (
            <div className="centro">
   
                <h3 className="storia">
                    A due passi da Porta Venezia,<b>l'Angolo d'Abruzzo</b> gestito dalla famiglia <b>Calasanzio</b> dal 1965, anno della sua fondazione
                    propone piatti e vini ispirati dalla bellissima terra da cui prende il nome il locale:l'<b>Abruzzo.</b><br/><br/>

                    Tris di chitarra, schiaffoni e gnocchi, Agnello al forno all’Abruzzese con patate e gli immancabili <b>Arrosticini </b>
                     sono solo alcuni dei piatti che ci hanno permesso negli anni di farci conoscere a livello nazionale,
                    riuscendo ad approdare nelle migliori guide culinarie.<br/><br/>

                    <GalleriaLogo/>

                    La forte passione e dedizione che ci contraddistingue hanno permesso inoltre di espandere il nostro marchio 
                    con l'apertura dell'Angolo d'Abruzzo 2(Via Padova,163) e a Torino con "l'Angolo d'Abruzzo a Torino"(Via Carlo Botta,10).
                </h3>
       
            </div>
        );
    }
}

export default Testocarosello;