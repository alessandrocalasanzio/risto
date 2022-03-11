import React from "react";
import location from "../img/location.png";
import instagram from "../img/instagram.png";
import facebook from "../img/facebook.png";
import milano from "../img/mi.jpg";
import tempo from "../img/tempo.jpeg";
import tel from "../img/preno.jpeg";
import social from "../img/social.jpg";
import linktree from "../img/linktree.png";



import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

class TestoContatti extends React.Component {
    render() {
        return (


            <Table borderless data-aos="fade-right" data-aos-mirror='true' data-aos-once='false'  >

                <tr className="Asstr" >
                    <th class="photo-grid1 card1-tall card1-wide">
                        <div className="card2 imgSize1 sfondoContatti1 paddingVia">Via Rosolino Pilo,20 - Milano
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

                <tr className="Asstr">
            
                    <div className="photo-grid1 card1-tall card1-wide card4 imgSize1 ">
                        <th className="sfondoContatti5">
                            <a class="fb1" href="https://it-it.facebook.com/angolodabruzzo1/">FACEBOOK</a>
                        </th>
                        <th className="sfondoContatti6">
                            <a class="ig1" href="https://www.instagram.com/angolodabruzzo/">INSTAGRAM</a>
                        </th>
                        <th className="sfondoContatti7">
                            <a class="tree1" href="https://linktr.ee/AngoloDabruzzo">LINKTREE</a>
                        </th>

                    </div>
                </tr>



            </Table>

        )
    }
}

export default TestoContatti;