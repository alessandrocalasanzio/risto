import React from "react";
import Panorama from "../img/Panorama.jpeg";
import angoloGrigio from "../img/angoloGrigio.jpeg";
import entrataAbruzzo from "../img/EntrataAbruzzo1.avif";
import Carousel from 'react-bootstrap/Carousel';

class Carosello extends React.Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100 caroselloResize"src={Panorama} alt="First slide" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 caroselloResize"src={angoloGrigio} alt="First slide" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 caroselloResize"src={entrataAbruzzo} alt="First slide" />
                    </Carousel.Item>
                    
                </Carousel>
            </div>
        );
    }
}
export default Carosello;