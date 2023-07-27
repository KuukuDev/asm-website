import React from 'react'
import './style.css'
import Trending from '../trending/Trending'
import Post from '../Post/Post'
import Side from '../../sideContent/side/Side'

const Home = () => {
    return (
        <>
            <main>
                <div className="container">
                    <section className="mainContent">
                        <Trending />
                        <Post />
                    </section>
                    <section className="sideContent">
                        <Side />
                    </section>
                </div>
            </main>
        </>
    )
}

export default Home