import React from "react";
import Panorama from "../img/Panorama.avif";
import angoloGrigio from "../img/angoloGrigio.avif";
import entrataAbruzzo from "../img/EntrataAbruzzo1.avif";
import Carousel from 'react-bootstrap/Carousel';

let imageList=[];


class Carosello extends React.Component {

    componentDidMount() {
        imageList = [Panorama,angoloGrigio,entrataAbruzzo]
        imageList.forEach((image) => {
            new Image().src = image
        });
    }

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