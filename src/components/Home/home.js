import React from 'react';
import NavBar from '../Nav_Bar/NavBar';
import './home.css'

function Home (){


    return <div>
        <NavBar showcart={false}/>
        <div className='home-section container-fluid bg-primary form-control'  >
            <h2  className='text-center text-light'> Jack Store</h2>
        </div>
        <div className='container'>
        <ul className="tour-list">
  <li>JUL 16 - DETROIT, MI - DTE ENERGY MUSIC THEATRE - <span >BUY TICKETS</span></li>
  <li>JUL 19 - TORONTO, ON - BUDWEISER STAGE - <span >BUY TICKETS</span></li>
  <li>JUL 22 - BRISTOW, VA - JIGGY LUBE LIVE -<span >BUY TICKETS</span></li>
  <li>JUL 29 - PHOENIX, AZ - AK-CHIN PAVILION - <span >BUY TICKETS</span></li>
  <li>AUG 2 - LAS VEGAS, NV - T-MOBILE ARENA - <span >BUY TICKETS</span></li>
  <li>AUG 7 - CONCORD, CA - CONCORD PAVILION - <span >BUY TICKETS</span></li>
</ul>
</div>

        </div>
}

export default Home;