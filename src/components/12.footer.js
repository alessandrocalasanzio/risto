import React from "react";

class Footer extends React.Component{
    render(){
        return(
<div >
<table class="table">
    <tr>
      <th scope="col"><p className="testSx"><nobr>Privacy Policy<br/> Cookie Policy</nobr></p>
</th>
      <th scope="col"><p className="testCx">Copyright&copy;2022. Tutti i diritti sono riservati. </p>
</th>
      <th scope="col"><p className="testDx">
          <nobr>
      <i class="fa fa-facebook" aria-hidden="true"></i>
      <i class="fa fa-instagram" aria-hidden="true"></i>
      <i class="fa fa-tree" aria-hidden="true"></i>
      </nobr>
          </p></th>
    </tr>
  </table>
</div>
        )
    }
}

export default Footer;