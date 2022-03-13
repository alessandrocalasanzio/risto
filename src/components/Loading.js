import React from "react";
import { css } from "@emotion/react";

import Ball3 from "../img/Ball.gif";
import Ball1 from "../img/Ball1.gif";
import Ball2 from "../img/Ball2.gif";



import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import PulseLoader from "react-spinners/PulseLoader";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
 
`;

const Loading = () => {
    return(
       
        <div className="sfondoLoading">
        <div align="center">
        <div className="loadingScritta1">
                BENVENUTI DA<br/> GIANNINO L'ANGOLO D'ABRUZZO
            </div>

            <HashLoader
            css={override}
            color="black"
            height={50}
            width={50}
            timeout={5000}
            size={150}
            
            />
          
            <div className="loadingScritta">
            IN CARICAMENTO<PulseLoader color="black" size={10} height={20} width={20} timeout={5000}/>
            </div>
        </div>
        </div>
       
    )
}

export default Loading;