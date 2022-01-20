import React from "react";
import PDF from "../pdf/MenuAngoloDabruzzo.pdf";

class BottoneHeadMenu extends React.Component{
    render(){
        return(
            
                <a type="button" href={PDF} download="MenuAngoloDabruzzo.pdf" className="btn btn-danger posBottone wiggle">
                    Scarica il nostro Menu
                    </a>
                    
                
        );
    }
}

export default BottoneHeadMenu;