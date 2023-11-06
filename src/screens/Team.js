import React from 'react'
import TeamCard from '../components/TeamCard';
import {team} from "../data/Data"
const Team = () => {
  return (
<section id="team" class="team content-section">



      <div class="container">
        <div class="row justify-content-center">
            <div className='col-md-12,col-sm-12 team-heading-container'>
                <h3 className='team-heading'>Current Members</h3>
            </div>

          {team.map((data, index) => {
              if (data.type === 0) {
                return (
                  <TeamCard name={data.name} position={data.position} img={data.img} about={data.about} year={data.year}/>
                );
              }
          })}
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
            <div className='col-md-12,col-sm-12 team-heading-container'>
                <h3 className='team-heading'>Alumini</h3>
            </div>

          {team.map((data, index) => {
              if (data.type === 1) {
                return (
                  <TeamCard  name={data.name} position={data.position} img={data.img} about={data.about} year={data.year}/>
                );
              }
          })}
        </div>
      </div>

</section>
  )
}

export default Team;
