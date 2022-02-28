import  React from "react";
import Mappa from "./11.mappa";
import TestoContatti from "./10.testoContatti";

class Contatti extends React.Component{
    render(){
        return(
            <div className="col-container">
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-6 marginColonna">
                        <TestoContatti/>
                    </div>
                    <div class="col-6 marginColonna">
                        <Mappa/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Contatti;