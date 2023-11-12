import React from 'react'
import NavBar from '../components/NavBar';
import TitleCard from '../components/TitleCard';
import Gallery from '../screens/Gallery';
import Footer from '../components/Footer';
import GridGallery from '../screens/GridGallery';
const GalleryPage = () => {
  return (
    <>
        <NavBar/>
        <TitleCard />
        {/* <Gallery /> */}
        <GridGallery />
        <Footer />
    </>
  )
}

export default GalleryPage