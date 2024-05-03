import React from 'react'
import {Carousel} from "react-responsive-carousel"
import img1 from "../assest/img3.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img2 from "../assest/img4.jpg"

const Services = () => {
  return (
    <div className="services">
        <Carousel infiniteLoop autoPlay showThumbs={false} showArrows={false}
        showStatus={false}  transitionTime={1000}>
            <div >
                <img src={img1} alt="type1" />
                <p className="Legend">welcome to AI</p>

            </div>
            <div >
                <img src={img2} alt="type2" />
                <p className="Legend">Full Stack</p>

            </div>
        </Carousel>

    </div>
  )
}

export default Services