import React from 'react'
import animal_1 from "../assets/images/animals/about_img.png"
const About = () => {
  return (
<section class="about" id="about">

<div class="container">
    <div class="row align-items-center">
        <div class="col-12 content-container">

            <div class="col-text col-md-8 col-sm-7">
                <div class="card-wrapper">
                    <div class="card-box">
                        <h4 class="card-title ">Conservation Science Lab: Pioneering a Future for Endangered Species</h4>
                        <p class="mbr-text ">
                        We are in the midst of the sixth mass extinction. The current rate of species endangerment is up to 1000 times higher than the natural rate. The focus of the lab is to understand the ecology of rare and endangered species and provide scientific evidence that will promote conservation in a human-dominated world. 

                        We invite spirited young people who wish to take up work on any of the aspects and also pave their careers in conservation science.</p>
                        
                    </div>
                </div>
            </div>

            <div class="col-img col-md-4 col-sm-5">
                <div class="image-wrapper">
                    <img src={animal_1} alt="Website"/>
                </div>
            </div>

        </div>
    </div>
</div>
</section>
  )
}

export default About