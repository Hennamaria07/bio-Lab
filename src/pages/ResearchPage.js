import React from 'react'
import NavBar from '../components/NavBar';
import TitleCard from '../components/TitleCard';
import Research from '../screens/Research';
import Footer from '../components/Footer';
const ResearchPage = (props) => {
  return (
    <>
        <NavBar />
        <TitleCard />
        <Research />
        <Footer />
    </>
  )
}


export default ResearchPage