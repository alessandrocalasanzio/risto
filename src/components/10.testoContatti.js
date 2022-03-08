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

       
            <Table borderless data-aos="fade-right" data-aos-mirror='true' data-aos-once='false'  >
             
                    <tr className="spazioCel" >
                        <th class="photo-grid1 card1-tall card1-wide">
                            <div className="card2 imgSize1 sfondoContatti1">Via Rosolino Pilo,20 - Milano
                            </div>
                        </th>
                    </tr>
                   
                    <tr>
                        <th className="photo-grid1 card1-tall card1-wide">
                            <div className="card3 imgSize1 sfondoContatti2">Lunedi Domenica:<br /> 12:00/14:30 - 19:30/23:00
                            </div>
                        </th>
                    </tr>

                    <tr>
                        <th class=" photo-grid1 card1-tall card1-wide">
                            <div className="card3 imgSize1 sfondoContatti3" >Per info e prenotazioni: <br />
                                <div style={{ color: "#9B111E" }}>02 2940 6526</div>
                            </div>
                        </th>
                    </tr>

                    <tr>
                        <th class=" photo-grid1 card1-tall card1-wide">
                            <div className="card4 imgSize1 sfondoContatti4">I NOSTRI SOCIAL <br />
                             <a  href="https://it-it.facebook.com/angolodabruzzo1/"><img src={facebook} alt="Angolo d'Abruzzo" title="Angolo d'Abruzzo" width="40px" height="40px" /></a>
                             <a  href="https://www.instagram.com/angolodabruzzo/"><img src={instagram} alt="Angolo d'Abruzzo" title="Angolo d'Abruzzo" width="50px" height="50px" /></a>
                             <a  href="https://linktr.ee/AngoloDabruzzo"><img src={linktree} alt="Angolo d'Abruzzo" title="Angolo d'Abruzzo" width="40px" height="40px" /></a> 

                            </div>
                        </th>
                    </tr>


           
            </Table>
        
        )
    }
}

export default TestoContatti;