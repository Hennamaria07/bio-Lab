import React from 'react'
import { MdAlternateEmail } from 'react-icons/md';

const TeamCard = (props) => {
    const {name,position,img,about,year} = props;


  return (
    <div class="col-md-4 col-sm-8 col-xs-8 d-flex justify-content-center">

<div class="card" data-state="#about">
  <div class="card-header">
    {/* <div class="card-cover" style={{}}></div> */}
    <img class="card-avatar" src={img} alt="avatar" />
    <h1 class="card-fullname">{name}</h1>
    <h2 class="card-jobtitle">{position}</h2>
    <h2 class="card-job-year">{year}</h2>
  </div>
  <div class="card-main">
    <div class="card-section is-active" id="about">
      <div class="card-content">
        <div class="card-subtitle">ABOUT</div>
        <p class="card-desc">{about}</p>
      </div>
      <div class="card-social">
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






{/* <div class="col-md-4 col-sm-8 col-xs-8 d-flex justify-content-center">
<div class="team-member">
<div className='team-image-container'>
    <img src={img} alt="" class="img-responsive"/>
</div>
  <h4>{name}</h4>
  <p>{position}</p>
  <div class="card-content">
    <h6 class="card-subtitle">ABOUT</h6>
    <p class="card-desc">Whatever tattooed stumptown art party sriracha gentrify hashtag intelligentsia readymade schlitz brooklyn disrupt.</p>
  </div>
</div>
</div> */}

// background-image: url('https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')