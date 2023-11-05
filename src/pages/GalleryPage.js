import React from 'react'
import NavBar from '../components/NavBar';
import TitleCard from '../components/TitleCard';
import Gallery from '../screens/Gallery';
import Footer from '../components/Footer';

const GalleryPage = () => {
  return (
    <>
        <NavBar/>
        <TitleCard />
        <Gallery />
        <Footer />
    </>
  )
}

export default GalleryPage