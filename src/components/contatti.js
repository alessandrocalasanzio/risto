import  React from "react";
import Mappa from "./mappa";
import TestoContatti from "./testoContatti";

class Contatti extends React.Component{
    render(){
        return(
            <div>
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