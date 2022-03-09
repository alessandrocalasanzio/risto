import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-grid-carousel'
import pasta from '../img/pastaang.jpg';
import pane from '../img/paneang.jpg';
import burrata from '../img/burrataang.jpg';
import arrosticini from'../img/arrosticiniang.jpg';
import vasi from '../img/vasiang.jpg';
import murales from '../img/muralesang.jpg';
import lavagna from '../img/lavagnanag.jpg';
import fuori from '../img/Fuori.jpg';
import angolo from '../img/angolo.jpg';

const images=[
  {id:'0',img:pasta},
  {id:'1',img:murales},
  {id:'2',img:pane},
  {id:'3',img:lavagna},
  {id:'4',img:burrata},
  {id:'5',img:fuori},
  {id:'6',img:arrosticini},
  {id:'7',img:angolo},
  {id:'8',img:vasi},
]



const Container = styled.div`
  top: 0;
  width: 100%;
  background: transparent !important;
  padding: 0;
  margin: 0;
  cursor:auto;
  
`

const Row = styled.div`
  max-width: 100%;
  margin: 0 0 0 0;
  padding:0px;
  cursor:auto;
  
`

const Logo = styled.div`
  background-image: ${({ images }) => `url(${images})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: auto;
`





const GalleriaImmagini = () => {
  return (
    <div>
    <Container>
      <Row>
        <Carousel  cols={3} rows={1} gap={15} loop={true}  hideArrow={true} autoplay={2400} mobileBreakpoint={500}  containerStyle={{backgroundColor:"white"}} responsiveLayout={[
          {
            breakpoint: 800,
            cols: 2
          },
          {
            breakpoint: 500,
            cols: 1
          }
        ]}>
        {images.map(image => (
            <Carousel.Item>
              <Logo>< img className='imgCarousel' src={image.img}/></Logo>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
    </div>
  )
}

export default GalleriaImmagini;