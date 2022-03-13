import React from "react";


import AOS from 'aos';
import 'aos/dist/aos.css';

import Table from 'react-bootstrap/Table';


class TestoContatti extends React.Component {
  

    componentDidMount(){
        AOS.init({
            duration : 1000,
            once: true,
            mirror: false
          })
    }
    render() {
        return (


            <Table borderless data-aos="fade-right" data-aos-mirror='false' data-aos-once='true'  >
<tbody>
                <tr className="Asstr" >
                    <th className="photo-grid1 card1-tall card1-wide noPadding">
                        <div className="card2 imgSize1 sfondoContatti1 paddingVia ">Via Rosolino Pilo,20 - Milano
                        </div>
                    </th>
                </tr>
                </tbody>
                <tbody>          
                <tr>
                    <th className="photo-grid1 card1-tall card1-wide noPadding">
                        <div className="card3 imgSize1 sfondoContatti2">Lunedi Domenica:<br /> 12:00/14:30 - 19:30/23:00
                        </div>
                    </th>
                </tr>
                </tbody>  
                <tbody className="Asstr">
                <tr>
                    <th className=" photo-grid1 card1-tall card1-wide noPadding">
                        <div className="card3 imgSize1 sfondoContatti3" >Per info e prenotazioni: <br />
                            <div style={{ color: "#9B111E" }}>02 2940 6526</div>
                        </div>
                    </th>
                </tr>
                </tbody>
                <tbody className="Asstr">
            
                    <tr className="photo-grid1 card1-tall card1-wide card4 imgSize1 noPadding ">
                        <th className="sfondoContatti5">
                            <a className="fb1" href="https://it-it.facebook.com/angolodabruzzo1/">FACEBOOK</a>
                        </th>
                        <th className="sfondoContatti6">
                            <a className="ig1" href="https://www.instagram.com/angolodabruzzo/">INSTAGRAM</a>
                        </th>
                        <th className="sfondoContatti7">
                            <a className="tree1" href="https://linktr.ee/AngoloDabruzzo">LINKTREE</a>
                        </th>

                    </tr>
                  
                </tbody>
             
                

            </Table>

        )
    }
}

export default TestoContatti;