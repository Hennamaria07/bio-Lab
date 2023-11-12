import React from 'react'
import { research } from '../data/Data';
import { AiFillCalendar,AiFillFilePdf ,AiOutlineGlobal} from 'react-icons/ai';

const Publication = () => {
  return (



<section class="publication" id="publication">

<div class="container-fluid" style={{padding:'0% 10%'}}>
    <div class="row align-items-center justify-content-center">



        {research.map((item, index) => {
            return (
<div className="col-12 col-md-10 col-sm-12 publication-container ">
<div class="index-wrapper" >
                            <h5>{index+1}</h5>

                    </div>

                    <div class="content-wrapper">
                        <h5>{item.title}</h5>
                        <div class="calender-wrapper">
                            <AiFillCalendar/>
                            <p >&ensp;2021</p>
                        </div>
                        <p>{item.dec}</p>
                        <div className="download-wrapper">
                            <div className="download-box pdf"> 
                                <AiFillFilePdf />
                                <a href="url" style={{textDecoration:'none'}}> &ensp;file1235.pdf</a>
                            </div>
                            <div className="download-box site"> 
                                <AiOutlineGlobal /> 
                                <a href="url" style={{textDecoration:'none'}}> &ensp;https://www.google.com/</a>
                            </div>                        
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

export default Publication