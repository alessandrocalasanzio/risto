import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Titoli extends React.Component{
  
  componentDidMount(){
    AOS.init({
      duration : 1000,
      once: true,
      mirror: false
    })
  }
  render(){
    return(
      <div className="container-fluid contenitoreMinimo">
      <div className="titoloStoria" data-aos="fade-right" data-aos-mirror='false' data-aos-once='true'>
        {this.props.title}
      </div>

      </div>

    )
  }
}

export default Titoli;