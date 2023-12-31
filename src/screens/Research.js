import React from 'react'
import { research } from '../data/Data';
import "../App.css"
const Research = () => {
  return (

    <section className="research" id="research">

    <div className="container-fluid">
        <div className="row align-items-center justify-content-center">

            <div className='col-md-12 one'>
                <h1>Endangered Species Ecology</h1>
            </div>

            {research.filter(item => item.type === 0).map((item, index) => {
                return (
                
                <div className={`col-12 col-sm-12 content-container ${index % 2 === 0 ? "no-reverse" : "reverse"}`}>
                    <div className="col-text col-md-7 col-sm-12 col-xs-12">
                        <div className="card-wrapper">
                            <div className="card-box">
                                <h3>{item.title}</h3>
                                <p>{item.dec}</p>
                                <h5>{item.team}</h5>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-img col-md-5 col-sm-12 col-xs-12">
                        <div className={`image-wrapper ${index % 2 === 0 ? "text-align-end" : "text-align-start"}`}>

                            <img src={item.img} alt="Website"/>
                        </div>
                    </div>
                </div>
                
                );
            })}

        
        </div>
    </div>


    <div className="container-fluid">
        <div className="row align-items-center justify-content-center">

            <div className='col-md-12 one'>
                <h1>Disease ecology</h1>
            </div>

            {research.filter(item => item.type === 1).map((item, index) => {
                return (
                
                <div className={`col-12 col-sm-12 content-container ${index % 2 === 0 ? "no-reverse" : "reverse"}`}>
                    <div className="col-text col-md-7 col-sm-12 col-xs-12">
                        <div className="card-wrapper">
                            <div className="card-box">
                                <h3>{item.title}</h3>
                                <p>{item.dec}</p>
                                <h5>{item.team}</h5>
                            </div>
                        </div>
                    </div>
        
                    <div className="col-img col-md-5 col-sm-12 col-xs-12">
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