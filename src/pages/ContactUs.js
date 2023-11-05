import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../screens/Hero';
import About from '../screens/About';
import Contact from '../screens/Contact';
import TitleCard from '../components/TitleCard';
import TeamCard from '../components/TeamCard';
import Team from '../screens/Team';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <>
        <NavBar/>
        <TitleCard />
        <Contact />
        <Footer />

    </>
  )
}

export default ContactUs