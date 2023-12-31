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
<section className="department-head" id="department-head">
<div className="head-container container-fluid">
    <div className="row m-0" style={{display:'flex',justifyContent:'center'}}>

        <div className="col-md-10 col-sm-10 main-container" style={{}}>
            <div className="col-img col-md-4 col-sm-5">
                <div className="image-wrapper">
                    <img src={person} alt="Website"/>
                </div>
            </div>

            <div className="col-text col-md-8 col-sm-7">
                <div className="text-wrapper">

                    <h4 className="card-title ">Dr. Karthikeyan Vasudevan</h4>
                    <h5 className="card-title ">Chief Scientist</h5>
                    <div style={{height:"1px" ,width:'100%',backgroundColor:'#000000',margin:'12px 0px'}}></div>
                    <p className="mbr-text "> We are in the midst of the sixth mass extinction. The current rate of species endangerment is up to 1000 times higher than the natural rate.</p>
                    <div className="btn mt-4" onClick={handleDownloadCV}>
                      <span className="btn-inner">Download CV</span>
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