import React from 'react';

import person from"../assets/images/current/1. Dr. Karthikeyan Vasudevan - Chief Scientist.JPG";
const DepartmentHead = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/pdf/CV.docx.pdf`;
        link.download = 'Dr_Karthikeyan_Vasudevan_CV.pdf';
        link.click();
      };
      
  return (
<section class="department-head" id="department-head">
<div class="head-container container-fluid">
    <div class="row m-0" style={{display:'flex',justifyContent:'center'}}>

        <div class="col-md-10 col-sm-10 main-container" style={{}}>
            <div class="col-img col-md-4 col-sm-5">
                <div class="image-wrapper">
                    <img src={person} alt="Website"/>
                </div>
            </div>

            <div class="col-text col-md-8 col-sm-7">
                <div class="text-wrapper">

                    <h4 class="card-title ">Dr. Karthikeyan Vasudevan</h4>
                    <h5 class="card-title ">Chief Scientist</h5>
                    <div style={{height:"1px" ,width:'100%',backgroundColor:'#000000',margin:'12px 0px'}}></div>
                    <p class="mbr-text "> We are in the midst of the sixth mass extinction. The current rate of species endangerment is up to 1000 times higher than the natural rate.</p>
                    <div className="btn mt-4" onClick={handleDownloadCV}>
                      <span class="btn-inner">Download CV</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</section>
  )
}

export default DepartmentHead;