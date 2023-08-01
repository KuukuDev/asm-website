import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="box logo">
                        <img src="../images/tech-logo-footer.png" alt="" />
                        <p>
                            Lorem ipsum, dolor
                        </p>
                        <i className='fa fa-envelope'></i>
                        <span> company@email.com </span> <br />
                        <i className='fa fa-headphones'></i>
                        <span> +000 0000 00000</span>
                    </div>
                    <div className="box">
                        <h3>TOP STORIES</h3>
                        <div className="item">
                            <img src="../images/hero/football1.jpg" alt="" />
                            <p>
                                Lorem ipsum dolor
                            </p>
                        </div>
                        <div className="item">
                            <img src="../images/hero/football4.jpg" alt="" />
                            <p>
                                Lorem ipsum dolor
                            </p>
                        </div>
                    </div>

                    <div className="box">
                        <h3></h3>
                        <div className="item">
                            <img src="../images/hero/basketball4.jpg" alt="" />
                            <p>
                                Lorem ipsum dolor
                            </p>
                        </div>
                        <div className="item">
                            <img src="../images/hero/basketball6.jpg" alt="" />
                            <p>
                                Lorem ipsum dolor
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <h3>LINKS</h3>
                        <ul><li>Home</li></ul>
                        <ul><li>About Us</li></ul>
                        <ul><li>Subscribe</li></ul>
                        <ul><li>Connect With Us</li></ul>
                    </div>
                </div>
            </footer>

            <div className="legal">
                <div className="container flexSB">
                    <p>&copy; all rights reserved</p>
                    <p>Company name</p>
                </div>
            </div>
        </>
    )
}

export default Footer