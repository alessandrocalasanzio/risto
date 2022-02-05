import React from "react";
import sfondomenu from '../img/sfondomenu.jpeg';
import nero from '../img/nero.jpg';

class MenuLista extends React.Component {
    render() {
        return (
          
            <section class="container-fluid">
            <div class="responsive1 filterDiv">
            <div class="gallery">
              <div class="content">
                <div class="content-overlay">
                    <div class="card">
                      <div class="card-body" >
                        <h5 class="card-title">{this.props.menu.titolo}:<br/> &nbsp;<em>{this.props.menu.prezzo}<sup>&nbsp;00</sup></em>&nbsp; </h5>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </section>
        )
    }
}

export default MenuLista;