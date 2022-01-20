import React from "react";
import AngoloLogo from "../img/AngoloLogo.png";

class Navbar extends React.Component{
    render() {
return(
<div className="image">
<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'white'}} >
    <a class="navbar-brand" href="#"><img src={AngoloLogo} alt="Angolo d'Abruzzo" title="Angolo d'Abruzzo" width="580" height="100" className="resizeImg"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto">
            <li class="nav-item">
                <a class="nav-link contrasto" href="#">Home</a>
                <a class="nav-link contrasto1" href="#">Chi Siamo</a>
                <a class="nav-link contrasto" href="#">Menu</a>
                <a class="nav-link contrasto1" href="#">Galleria</a>
                <a class="nav-link contrasto" href="#">Contatti</a>
            </li>
           
        </ul>
    </div>
</nav>


 </div>
)
    };
}

export default Navbar;