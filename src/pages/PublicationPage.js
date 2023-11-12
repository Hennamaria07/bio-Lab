import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../screens/Hero';
import About from '../screens/About';
import Contact from '../screens/Contact';
import TeamCard from '../components/TeamCard';
import Team from '../screens/Team';
import Gallery from '../screens/Gallery';
import TitleCard from '../components/TitleCard';
import Footer from '../components/Footer';
import Publication from '../screens/Publication';
const PublicationPage = () => {
  return (
    <>
        <NavBar/>
        <TitleCard />
        <Publication />
        <Footer />
    </>
  )
}

export default PublicationPage;