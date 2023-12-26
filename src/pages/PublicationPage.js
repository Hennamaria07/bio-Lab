import React ,{useState} from 'react'

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

import PublicationBook from '../screens/PublicationBook';

const PublicationPage = () => {

const [displayPage , setDisplayPage] = useState(1);
  return (
    <>
        <NavBar/>
        <TitleCard />
        <div className='col-md-12 publication-switch-container'>
            <div className={`switch-box ${displayPage === 1 ? 'active' : 'non-active'}`} style={{}} onClick={() => setDisplayPage(1)}>
                <h2 >Peer reviewed publication</h2>
            </div>
            <div className={`switch-box ${displayPage === 2 ? 'active' : 'non-active'}`} onClick={() => setDisplayPage(2)}>
                <h2 >Books/Book chapters</h2>
            </div>
        </div>
        {displayPage ===1 && <Publication />}
        {displayPage ===2 && <PublicationBook />}

        <Footer />
    </>
  )
}

export default PublicationPage;