import React from 'react'
import { Carousel } from 'react-bootstrap'
import Moto1 from "./images/mo5.jpg";
import Moto2 from "./images/mo6.jpg";
import Moto3 from "./images/mo7.jpg";
import Moto4 from "./images/mo8.jpg";

function Slider() {
    return (
        <div >
             <h1 style={{textAlign:'center',fontFamily:"sans-serif"}}>EVENTS</h1>
            <Carousel >
             
            <Carousel.Item style={{ height: '115vh' }}>
                  
                  <img style={{ height: '90vh' }}
                      className="d-block w-100"
                      src={Moto1}
                      alt="First slide"
                  />
                  <Carousel.Caption >
                      <div style={{margin:"0% 0% 45% 0%"}}>
                      </div>
                  </Carousel.Caption>
              </Carousel.Item>

            <Carousel.Item style={{ height: '115vh' }}>
                  
                  <img style={{ height: '90vh' }}
                      className="d-block w-100"
                      src={Moto2}
                      alt="First slide"
                  />
                  <Carousel.Caption >
                      <div style={{margin:"0% 0% 45% 0%"}}>
                      </div>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item style={{ height: '115vh' }}>
                  
                  <img style={{ height: '90vh' }}
                      className="d-block w-100"
                      src={Moto3}
                      alt="First slide"
                  />
                  <Carousel.Caption >
                      <div>

                      </div>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item style={{ height: '115vh' }}>
                  
                  <img style={{ height: '90vh' }}
                      className="d-block w-100"
                      src={Moto4}
                      alt="First slide"
                  />
                  <Carousel.Caption >
                      <div>

                      </div>
                  </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Slider


