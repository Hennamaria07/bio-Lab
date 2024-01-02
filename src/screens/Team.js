import React from 'react'
import TeamCard from '../components/TeamCard';
import {team} from "../data/Data"
const Team = () => {
  return (
<section id="team" className="team content-section">



      <div className="container">
        <div className="row justify-content-center">
            <div className='col-md-12,col-sm-12 team-heading-container'>
                <h3 className='team-heading'>Current Members</h3>
            </div>
            <div className='col-md-12,col-sm-12 team-heading-container'>
                <h3 className='team-heading'>Scientists</h3>
            </div>
           

          {team.map((data, index) => {
              if (data.type === 0) {
                return (
                  <TeamCard name={data.name} position={data.position} img={data.img} about={data.about} year={data.year} des={data.des} email={data.email} />
                );
              }
          })}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
            <div className='col-md-12,col-sm-12 team-heading-container'>
                <h3 className='team-heading'>Staff</h3>
            </div>

          {team.map((data, index) => {
              if (data.type === 1) {
                return (
                  <TeamCard  name={data.name} position={data.position} img={data.img} about={data.about} year={data.year} des={data.des} email={data.email} />
                );
              }
          })}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
            <div className='col-md-12,col-sm-12 team-heading-container'>
                <h3 className='team-heading'>Post-Doc</h3>
            </div>

          {team.map((data, index) => {
              if (data.type === 2) {
                return (
                  <TeamCard  name={data.name} position={data.position} img={data.img} about={data.about} year={data.year} des={data.des} email={data.email} />
                );
              }
          })}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
            <div className='col-md-12,col-sm-12 team-heading-container'>
                <h3 className='team-heading'>Graduate Students</h3>
            </div>

          {team.map((data, index) => {
              if (data.type === 3) {
                return (
                  <TeamCard  name={data.name} position={data.position} img={data.img} about={data.about} year={data.year} des={data.des} email={data.email} />
                );
              }
          })}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
            <div className='col-md-12,col-sm-12 team-heading-container'>
                <h3 className='team-heading'>Research Assistants</h3>
            </div>

          {team.map((data, index) => {
              if (data.type === 4) {
                return (
                  <TeamCard  name={data.name} position={data.position} img={data.img} about={data.about} year={data.year} des={data.des} email={data.email} />
                );
              }
          })}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
            <div className='col-md-12,col-sm-12 team-heading-container'>
                <h3 className='team-heading'>Alumini</h3>
            </div>

          {team.map((data, index) => {
              if (data.type === 5) {
                return (
                  <TeamCard  name={data.name} position={data.position} img={data.img} about={data.about} year={data.year} des={data.des} email={data.email} />
                );
              }
          })}
        </div>
      </div>

</section>
  )
}

export default Team;
