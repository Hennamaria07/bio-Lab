import React from 'react'
import background from "../assets/images/other/background1.jpg"
const TitleCard = (props) => {
  return (
    <section class="title-card" id="title-card">

<div class="container-fluid">
    <div class="row align-items-center">
        <div class="content-container">
        <img src={background} className='title-card-background'/>

                    <div class="title-card-box">
                        <h4 class="card-title ">Tailus blocks leadership</h4>
                        <p class="mbr-text ">
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