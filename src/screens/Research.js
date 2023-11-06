import React from 'react'
import { research } from '../data/Data'
const Research = () => {
  return (



<section class="research" id="research">

<div class="container-fluid">
    <div class="row align-items-center justify-content-center">



        {research.map((item, index) => {
            return (
<div className={`col-12 col-sm-12 content-container ${index % 2 === 0 ? "no-reverse" : "reverse"}`}>
                <div class="col-text col-md-7 col-sm-12 col-xs-12">
                    <div class="card-wrapper">
                        <div class="card-box">
                            <h3>{item.title}</h3>
                             <p>{item.dec}</p>
                             <h5>{item.team}</h5>
                        </div>
                    </div>
                </div>
    
                <div class="col-img col-md-5 col-sm-12 col-xs-12">
                    <div className={`image-wrapper ${index % 2 === 0 ? "text-align-end" : "text-align-start"}`}>

                        <img src={item.img} alt="Website"/>
                    </div>
                </div>
            </div>
              
            );
          })}

    
    </div>
</div>
</section>
















  )
}

export default Research