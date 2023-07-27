import React from 'react'
import './singlepageslider.css'
import Slider from 'react-slick'
import { trending } from '../../../dummyData'

const SinglePageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className="singleTrending">
          <Slider {...settings}>
            {trending.map((val) => {
              return (
                <div className="items">
                  <div className="box">
                    <div className="images">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <h1 className='title'>{val.title}</h1>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
      </section>
    </>
  )
}

export default SinglePageSlider