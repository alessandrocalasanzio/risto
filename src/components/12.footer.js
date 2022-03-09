import React from "react";
import Privacy from "./privacy";
import Cookie from "./Cookie";
class Footer extends React.Component{
    render(){
        return(
<div >
<table class="table">
    <tr>
      <th scope="col"><p className="testSx"><nobr>  <Privacy/> <br/><Cookie/></nobr></p>
</th>
      <th scope="col"><p className="testCx">Da Giannino L'angolo D'Abruzzo<br/>Copyright&copy;2022. Tutti i diritti sono riservati.</p>
</th>
      <th scope="col"><p className="testDx">
          <nobr>
      <a class="fb" href="https://it-it.facebook.com/angolodabruzzo1/"><i class="fa fa-facebook" aria-hidden="true"></i></a>
      <a class="ig" href="https://www.instagram.com/angolodabruzzo/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
      <a class="tree" href="https://linktr.ee/AngoloDabruzzo"><i class="fa fa-tree" aria-hidden="true"></i></a>
      </nobr>
          </p></th>
    </tr>
  </table>
</div>
        )
    }
}

export default Footer;