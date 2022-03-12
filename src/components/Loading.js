import React from "react";
import { css } from "@emotion/react";

import Ball3 from "../img/Ball.gif";
import Ball1 from "../img/Ball1.gif";
import Ball2 from "../img/Ball2.gif";



import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import PulseLoader from "react-spinners/PulseLoader";


const override = css`
  display: block;
  margin-top: 100px;
`;

const Loading = () => {
    return(
       
        <div className="sfondoLoading">
        <div align="center">
            <ClimbingBoxLoader
            css={override}
            color="black"
            height={200}
            width={200}
            timeout={5000}
            size={50}
            
            />
            <br/><br/><br/>
            <div className="loadingScritta">
            CARICAMENTO<PulseLoader color="black" size={10} height={20} width={20} timeout={5000}/>
            </div>
        </div>
        </div>
       
    )
}

export default Loading;