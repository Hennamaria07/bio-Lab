import React from 'react'
import background from "../assets/images/other/background1.jpg"
const TitleCard = (props) => {
  return (
    <section className="title-card" id="title-card">

<div className="container-fluid">
    <div className="row align-items-center">
        <div className="content-container">
        <img src={background} className='title-card-background'/>

                    <div className="title-card-box">
                        <h4 className="card-title ">Tailus blocks leadership</h4>
                        <p className="mbr-text ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                       
                    </div>

        </div>
    </div>
</div>
</section>
  )
}

export default TitleCard