import React from 'react'
import './Testimonials.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import image1 from "../../assets/comment/1.jpg"
import image2 from "../../assets/comment/2.jpg"
import image3 from "../../assets/comment/3.jpg"
import image4 from "../../assets/comment/4.jpg"
import image5 from "../../assets/comment/5.jpg"
import image6 from "../../assets/comment/6.jpg"



const Testimonials = () => {
  const item = [
    { id: 1, name: 'JOSI JD', country: 'USA', city: 'florida', comment: 'the best univesity kda kda kda', date: '10/10/2023', image:image1 },
    { id: 2, name: 'MUSTAPHA AJJOUQA', country: 'Morocco', city: 'Errachidia', comment: 'the best univesity kda kda kda', date: '20/02/2024', image:image2  },
    { id: 3, name: 'SIMO KDA', country: 'Frace', city: 'Paris', comment: 'the best univesity kda kda kda', date: '14/06/2023', image:image3  },
    { id: 4, name: 'HAMZA MOHA', country: 'USA', city: 'New York', comment: 'the best univesity kda kda kda', date: '11/08/2023', image:image4  },
    { id: 5, name: 'MOUL CHI', country: 'Germany', city: 'Berline', comment: 'the best univesity kda kda kda', date: '01/01/2023', image:image5  },
    { id: 6, name: 'WAAA3 WAAA3', country: 'Italy', city: 'Roma', comment: 'the best univesity kda kda kda', date: '28/11/2023', image:image6  },
  ]




  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };
  return (
    <div className='testimonials'>
      <div className='info'>
        <p>Testimonials</p>
        <h1>Our Students Reviews</h1>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {item.map((data, index) => (
            <div key={index} className='card'>
              <div>
                  <div className='user_in flex'>
                      <div className='image flex'>
                        <img src={data.image} alt="" />
                        <div>
                          <p>{data.name}</p>
                          <p>{data.country}, {data.city}</p>
                        </div>
                      </div>
                      <div className='date'>
                          <p>Date : {data.date}</p>
                      </div>
                  </div>
                  <div className='comment flex'>
                    <p>{data.comment}</p>
                  </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials