import React from "react";
import angolo from "../img/EntrataAbruzzo.jpg";
import BottoneHeadMenu from "./3.bottoneHeadMenu";
class ImmagineHeader extends React.Component{
    render() {
        return(
            <div className="noMargine">
              <BottoneHeadMenu/>
              <img src={angolo} class="img-fluid" alt="Responsive image"/>
              </div>
            
        );
    }
}

export default ImmagineHeader;