import React from 'react'
import "../App.css"
import { research } from '../data/Data';
import img from "../assets/images/current/1. Dr. Karthikeyan Vasudevan - Chief Scientist.JPG";
import { Card } from 'react-bootstrap';
const Opportunities = () => {
    return (
        <>
        <div className="opportunities" id="opportunities">
            <div className="container-fluid">
        <div className="row align-items-center justify-content-center">

            <div className='col-md-12 one'>
                <h1>Endangered Species Ecology</h1>
            </div>
        </div>
    </div>
    <div className="container py-5">
    <div className="row flex overflow-hidden">
            <div className="col-md-6 d-flex justify-content-center">
                <img src={img} width={"100%"} alt="" />
            </div>
            <div className="col-md-6">
            <Card className='m-0 mt-md-0 mt-3 ' style={{ minWidth: "100%" }}>
      <Card.Body>
        <Card.Text>
            We are always looking to grow our team! Anyone interested in joining the Animal Conservation Ecology Lab can contact Dr. Karthikeyan Vasudevan via email. I'm always pleased to talk about mutual research interests. The applicants must eventually provide a current CV and a statement of their research interests.
        </Card.Text>
      </Card.Body>
    </Card>
     </div>
        </div>
    </div>
    </div>
        </>
    )
}

export default Opportunities
