import React from 'react';
import Iframe from 'react-iframe';

import AOS from 'aos';
import 'aos/dist/aos.css';


class Mappa extends React.Component{
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

         
         <div className='overflowMap photo-grid2'>
         <div className='wrapper iframe' data-aos="fade-left" data-aos-mirror='true' data-aos-once='false'>
            <Iframe className='iframeDim' url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.852901413119!2d9.210759515819774!3d45.47276704089228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c694f8cd3347%3A0xbb00bfa7fa66071d!2sDa%20Giannino%20l&#39;Angolo%20d&#39;Abruzzo!5e0!3m2!1sit!2sit!4v1575474651741!5m2!1sit!2sit"  frameborder="0" style="border:0;" allowfullscreen="" sandbox=''/>
            </div>
         </div>
      );
   }
}

export default Mappa;