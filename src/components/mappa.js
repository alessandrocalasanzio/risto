import React from 'react';
import Iframe from 'react-iframe';




class Mappa extends React.Component{
   
   render(){

      return(
         <div className='wrapper iframe'>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.852901413119!2d9.210759515819774!3d45.47276704089228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c694f8cd3347%3A0xbb00bfa7fa66071d!2sDa%20Giannino%20l&#39;Angolo%20d&#39;Abruzzo!5e0!3m2!1sit!2sit!4v1575474651741!5m2!1sit!2sit" width="100%" height="448" frameborder="0" style="border:0;" allowfullscreen="" sandbox=''/>

         </div>
      );
   }
}

export default Mappa;