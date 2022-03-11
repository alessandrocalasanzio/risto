import React from "react";
import Fuori from "../img/Fuori.jpg";
import Panorama from "../img/Panorama.jpeg";
import angoloGrigio from "../img/angoloGrigio.jpeg";
import Carosello from "./5.carosello";
import Testocarosello from "./6.testocarosello";

import AOS from 'aos';
import 'aos/dist/aos.css';

class ScheletroStoria extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        AOS.init({
            duration : 1000,
            once: false,
            mirror: true
          })
    }

    render() {

        return (
            <div>
                <div class="container-fluid " data-aos="fade-up" data-aos-mirror='true' data-aos-once='false'>
                    <div class="row">
                        <div class="col-md-5 marginColonna">
                            <Carosello/>
                        </div>
                        
                        <div class="col-md-7 marginColonna text-center" style={{backgroundColor:'rgb(230, 183, 96)'}}>
                     
                            <Testocarosello/>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheletroStoria;