import React from "react";
import {Audio} from "react-loader-spinner";
import { css } from "@emotion/react";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = css`
  display: block;
  margin-top: 100px;
  border-color: red;
  size: 200px;
  
`;

const Loading = () => {
    return(
        <div align="center">
            <ClimbingBoxLoader
            css={override}
            color="orange"
            height={250}
            width={250}
            timeout={5000}
            size={50}
            
            />
            <br/><br/><br/>
            <div className="loadingScritta">
            CARICAMENTO...
            </div>
        </div>
    )
}

export default Loading;