import React from "react";
import sfondomenu from '../img/sfondomenu.jpeg';
import nero from '../img/nero.jpg';
import $ from "jquery";
import { Table } from "react-bootstrap";

import AOS from 'aos';
import 'aos/dist/aos.css';

class MenuLista extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 1000,
      once: false,
      mirror: false,
    })
  }
  
  render() {
    return (

      <div data-aos="fade-right" data-aos-mirror='false' data-aos-once='true'>
      <h1 className="megCentrato">{this.props.menu.megatitolo}</h1>

      <Table borderless  className="responsive1 filterDiv">
        <thead>
          <tr>
            <th className="card-title"  ><nobr>{this.props.menu.titolo}</nobr></th>
            <th style={{ textAlign: "right" }} className="top">{this.props.menu.dollaro}{this.props.menu.prezzo}<sup>&nbsp;{this.props.menu.numero}</sup></th>
          </tr>
        </thead>
      </Table>
    </div>

    )
  }
}

export default MenuLista;