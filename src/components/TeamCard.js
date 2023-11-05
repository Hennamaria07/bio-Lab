import React from 'react'

const TeamCard = (props) => {
    const {name,position,img} = props;


  return (
    <div class="col-md-3 col-sm-8 col-xs-8">
        <div class="team-member">
        <div className='team-image-container'>
            <img src={img} alt="" class="img-responsive"/>
        </div>
        <h4>{name}</h4>
        <p>{position}</p>
        </div>
    </div>
  )
}

export default TeamCard