import React, { useState } from 'react'
import Head from './Head'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  const [navbar, setnavbar] = useState(false)
  return (
    <>
        <Head />
        <header>
          <div className="container paddingSmall">
            <nav>
              <ul className={navbar ? "navbar" : 'flex'} onClick={() => setnavbar(false)}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/football'>Football</Link>
                </li>
                <li>
                  <Link to='/basketball'>Basketball</Link>
                </li>
                <li>
                  <Link to='/boxing'>Boxing</Link>
                </li>
                <li>
                  <Link to='/volleyball'>Volleyball</Link>
                </li>
                <li>
                  <Link to='/athletics'>Athletics</Link>
                </li>
                <li>
                  <Link to='/cricket'>Cricket</Link>
                </li>
              </ul>
              <button className='barIco' onClick={() =>setnavbar(!navbar)}>
                {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
              </button>
            </nav>
          </div>
        </header>
    </>
  )
}

export default Header