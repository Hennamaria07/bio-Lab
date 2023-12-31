import React from 'react'
import { MdAlternateEmail } from 'react-icons/md';

const TeamCard = (props) => {
    const {name,position,img,about,year} = props;


  return (
    <div className="col-md-4 col-sm-8 col-xs-8 d-flex justify-content-center">

<div className="card" data-state="#about">
  <div className="card-header">
    {/* <div className="card-cover" style={{}}></div> */}
    <img className="card-avatar" src={img} alt="avatar" />
    <h1 className="card-fullname">{name}</h1>
    <h2 className="card-jobtitle">{position}</h2>
    <h2 className="card-job-year">{year}</h2>
  </div>
  <div className="card-main">
    <div className="card-section is-active" id="about">
      <div className="card-content">
        <div className="card-subtitle">ABOUT</div>
        <p className="card-desc">{about}</p>
      </div>
      <div className="card-social">
        <a href="#"><MdAlternateEmail/></a>
        <p className='social-link m-0'> ajithkr@gmail.com</p>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

export default TeamCard






{/* <div className="col-md-4 col-sm-8 col-xs-8 d-flex justify-content-center">
<div className="team-member">
<div className='team-image-container'>
    <img src={img} alt="" className="img-responsive"/>
</div>
  <h4>{name}</h4>
  <p>{position}</p>
  <div className="card-content">
    <h6 className="card-subtitle">ABOUT</h6>
    <p className="card-desc">Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.</p>
  </div>
</div>
</div> */}

// background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')