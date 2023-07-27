import React from 'react'
import Heading from '../../../common/Heading/Heading'
import SocialMedia from '../social/SocialMedia'
import './side.css'

const Side = () => {
    const categories = ["Football", "Basketball", "Boxing", "Volleyball", "Athletics", "Cricket", "Swimming", "Tennis", "Rugby", "Badminton", "Golf", "Formula 1" ]
    return (
        <>
            <Heading title='Stay Connected' />
            <SocialMedia />
            <Heading title='Subscribe' />

            <section className="subscribe">
                <h1 className="title">Subscribe to our Newsletter</h1>
                <form action="">
                    <input type="text" name='' id='' placeholder='E-mail Address' />
                    <button>
                        <i className="fa fa-paper-plane"></i>SUBMIT
                    </button>
                </form>
            </section>

            {/*<section className="banner">
                <img src="./images/sidebarad.jpg" alt="" />
            </section>

            <section className="banner">
                <img src="./images/sidebarad.jpg" alt="" />
            </section> */}

            <section className='categories'>
                <Heading title='Categories' />
                {categories.map((val) => {
                    return <div className="category category1">
                        <span>{val}</span>
                    </div>
                })}
            </section>
        </>
    )
}

export default Side