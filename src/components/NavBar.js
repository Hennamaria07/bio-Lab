import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
// import Logo from '../images/logoTD.png';
// import twitter from '../icons/twitter.png';
// import facebook from '../icons/facebook.png';
// import instagram from '../icons/instagram.png';
// import linkedin from '../icons/linkedin.png';
import logo from "../assets/images/logo.png"

const NavBar = () =>  {
 
	const [open, setOpen] = useState(false);
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)



  //navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<div className="navarea">
			<nav className={navbar ? "navbar-active" : "navbar"}>
			{/* <div className='hide'></div> */}

				<Link to="/" className="nav-logo">
					<img src={logo} alt="Logo"/>
                    {/* <h2 className='logo-text-name'>Animal Conservation <br/>Ecology Lab</h2> */}
				</Link>
				<div onClick={handleClick} className="nav-icon">
					{open ? <FiX /> : <FiMenu />}
				</div>
				<ul className={open ? 'nav-links active' : 'nav-links'}>
					<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/research" className="nav-link" onClick={closeMenu}>
							Research
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/publications" className="nav-link" onClick={closeMenu}>
							Publications
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/gallery" className="nav-link" onClick={closeMenu}>
							Gallery
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/people" className="nav-link" onClick={closeMenu}>
							Members
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link" onClick={closeMenu}>
							Contact
						</Link>
					</li>
				</ul>
                {/* <div className='hide'></div> */}


			</nav>
		</div>
  	);}
export default NavBar;