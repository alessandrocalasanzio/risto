import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Titoli1 extends React.Component{
 
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
      <div className="titoloStoria titoloStoria1" data-aos="fade-left" data-aos-mirror='true' data-aos-once='false'>
        {this.props.title}
      </div>
      </div>

    )
  }
}

export default Titoli1;