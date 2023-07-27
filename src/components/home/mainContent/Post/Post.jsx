import React from 'react'
import Slider from 'react-slick'
import './post.css'
import { post } from '../../../../dummyData'
import Heading from '../../../common/Heading/Heading'

const Post = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }
    return (
        <>
            <section className="trendingPost">
                <Heading title='Trending Posts' />
                <div className="content">
                    <Slider {...settings}>
                        {post.map((val) => {
                            return (
                                <div className="items">
                                    <div className="box shadow">
                                        <div className="images">
                                            <div className="img">
                                                <img src={val.cover} alt="" />
                                            </div>
                                            <div className="category category1">
                                                <span>{val.category}</span>
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h1 className='title'>{val.title.slice(0, 40)} ...</h1>
                                            <div className="date">
                                                <i className='fas fa-calendar-days'></i>
                                                <label htmlFor="">{val.date}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Post