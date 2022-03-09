import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import angolo from "../img/EntrataAbruzzo.jpg";
import PDF from "../pdf/MenuAngoloDabruzzo.pdf";
import Titoli from "./2.titoli";

import { HashLink as Link } from 'react-router-hash-link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Textfit } from 'react-textfit';


export default class TransNavigationBar extends Component {


 
  state = {
    headerBreakPoint: 50,
    activeHeader: false,
    navbarExpanded: false
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY >= this.state.headerBreakPoint) {
        this.setState({
          activeHeader: true
        });
      } else if (
        scrollY < this.state.headerBreakPoint &&
        this.state.navbarExpanded === false
      ) {
        this.setState({
          activeHeader: false
        });
      }
    });
  }


  render() {
   
    return (
      
      <div>
        
          <div className="box">
          <img src={angolo} class="img" alt="Responsive image"/>
         
          <a type="button" href={PDF} download="MenuAngoloDabruzzo.pdf" className="btn btn-danger wiggle">
                    Scarica il nostro Menu
                    </a>
          </div>
        <nav className={`navbar navbar-expand-lg fixed-top ${this.state.activeHeader ? "test1" : ""}`}>
        <a className={`navbar-brand ${this.state.activeHeader ? "noImg" : ""}`}href="#1">
            </a>
          <Navbar> 
              <Nav className="mx-auto nav-item justify-content-center">
                <Nav.Item>
                  <Nav.Link>
                    <AnchorLink href='#home' className="nav-link contrasto">
                      Home
                    </AnchorLink>
                  </Nav.Link>
                </Nav.Item>


                <NavDropdown title={<span className="nav-link contrasto1">Menu</span>} id="basic-nav-dropdown">
                 
                  <NavDropdown.Item href={PDF} download="MenuAngoloDabruzzo.pdf" className="nav-link-dropdown">
                   <a className="nav-link-dropdown">
                   Scarica il nostro menu
                   </a>
                  
                  </NavDropdown.Item>

                  <NavDropdown.Item  className="nav-link-dropdown">
                  <AnchorLink href='#menu' className="nav-link-dropdown">
                    Guarda il nostro menu
                    </AnchorLink>
                  </NavDropdown.Item>
                </NavDropdown>


                <Nav.Item>
                  <Nav.Link>
                  <AnchorLink href='#chisiamo' className="nav-link contrasto">
                      <nobr>Chi siamo</nobr>
                    </AnchorLink>
                  </Nav.Link>
                </Nav.Item>


                <Nav.Item>
                  <Nav.Link>
                    <AnchorLink href='#galleria' className="nav-link contrasto1">
                      Galleria
                    </AnchorLink>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>
                    <AnchorLink href="#contatti" className="nav-link contrasto" >
                      Contatti
                    </AnchorLink>
                  </Nav.Link>
                </Nav.Item>
              </Nav>

          </Navbar>
        </nav>

        
      </div>
     
    );
  }
}
