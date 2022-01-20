import React from "react";
import Fuori from "../img/Fuori.jpg";
import Panorama from "../img/Panorama.png";
import angoloGrigio from "../img/angoloGrigio.png";
import Carosello from "./5.carosello";
import Testocarosello from "./6.testocarosello";

class ScheletroStoria extends React.Component {
    render() {

        return (
            <div>
                <div class="container-fluid ">
                    <div class="row">
                        <div class="col-4 marginColonna">
                            <Carosello/>
                        </div>
                        <div class="col-8 marginColonna" style={{backgroundColor:'rgb(230, 183, 96)'}}>
                            <Testocarosello/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScheletroStoria;