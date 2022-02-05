import React from "react";
import {Waypoint} from "react-waypoint";
import $ from "jquery";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Titoli extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 1000,
      once: false,
      mirror: true
    })
  }
  render(){
    return(
      <div className="container-fluid contenitoreMinimo">
      <div className="titoloStoria" data-aos="fade-right" data-aos-mirror='true' data-aos-once='false'>
        {this.props.title}
      </div>

      </div>

    )
  }
}

export default Titoli;