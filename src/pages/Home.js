import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Hero from '../screens/Hero';
import About from '../screens/About';
import GalleryHome from '../screens/GalleryHome';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
        <NavBar/>
        <Hero/>
        <About/>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-sm-12 col-xs-12 home-gallery'>
                <h3> Witnessing Wildlife Wonders:<br/> A Visual Journey Through Our Lab</h3>
            </div>
          </div>
        </div>
        <GalleryHome />
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-12 col-sm-12 col-xs-12 home-gallery-button'>
              <Link to="/gallery" class="btn">
                  <span class="btn-inner">Load  More</span>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
    </>
  )
}

export default Home