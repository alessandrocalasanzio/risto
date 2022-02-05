import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import angolo from "../img/EntrataAbruzzo.jpg";
import PDF from "../pdf/MenuAngoloDabruzzo.pdf";

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
                    <Link className="nav-link contrasto" to="/">
                      Home
                    </Link>
                  </Nav.Link>
                </Nav.Item>


                <NavDropdown title={<span className="nav-link contrasto1">Menu</span>} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/viewattractions" className="nav-link-dropdown">
                    Scarica il nostro menu
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/addattractions" className="nav-link-dropdown">
                    Guarda il nostro menu
                  </NavDropdown.Item>
                </NavDropdown>


                <Nav.Item>
                  <Nav.Link>
                    <Link className="nav-link contrasto" to="/about">
                     <nobr>Chi Siamo</nobr>
                    </Link>
                  </Nav.Link>
                </Nav.Item>


                <Nav.Item>
                  <Nav.Link>
                    <Link className="nav-link contrasto1" to="/contact">
                      Galleria
                    </Link>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>
                    <Link className="nav-link contrasto" to="/contact">
                      Contatti
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
          </Navbar>
        </nav>

        
      </div>
    );
  }
}
