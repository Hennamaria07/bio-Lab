import React from 'react'
import "./contact.css";
import { BsGeoFill,BsTelephoneFill,BsEnvelopeAtFill ,BsGlobeAmericas} from "react-icons/bs"
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
<section className="contact" id="contact">
<div className="container">
<div className="row justify-content-center">
<div className="col-md-12">
<div className="wrapper">
<div className="row no-gutters">
<div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
<div className="contact-wrap w-100 p-md-5 p-4">
<h3 className="mb-4">Let's get in touch</h3>
<div id="form-message-warning" className="mb-4"></div>
<div id="form-message-success" className="mb-4">
We're open for any suggestion or just to have a chat
</div>
<form method="POST" id="contactForm" name="contactForm" className="contactForm">
<div className="row">
<div className="col-md-6">
<div className="form-group">
<label className="label" htmlFor="name">Full Name</label>
<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label className="label" htmlFor="email">Email Address</label>
<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<label className="label" htmlFor="subject">Subject</label>
<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<label className="label" htmlFor="#">Message</label>
<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<input type="submit" value="Send Message" className="btn-primary"/>
<div className="submitting"></div>
</div>
</div>
</div>
</form>
</div>
</div>

<div className="col-lg-4 col-md-5 d-flex align-items-stretch">
<div className="info-wrap w-100 p-md-5 p-4">
<h3>Let's get in touch</h3>
<p className="mb-4">We're open for any suggestion or just to have a chat</p>

<div className="dbox w-100 d-flex align-items-start">
    <div className="icon d-flex align-items-center justify-content-center">
        <BsGeoFill className="icon-img"/>
    </div>
    <div className="text pl-3">
        <p><span>Address:</span>Karthikeyan Vasudevan
Chief Scientist
Laboratory for the Conservation of Endangered Species (LaCONES)
CSIR-Centre for Cellular and Molecular Biology
162 Pillar, PVNR Expressway, Attapur Ring Road,
Hyderguda, Hyderabad 500 048</p>
    </div>
</div>

<div className="dbox w-100 d-flex align-items-center">
    <div className="icon d-flex align-items-center justify-content-center">
        <BsTelephoneFill className="icon-img"/>
    </div>
    <div className="text pl-3">
        <p><span>Phone:</span> <Link to="tel://1234567920">+91-40-24006443</Link></p>
    </div>
</div>

<div className="dbox w-100 d-flex align-items-center">
<div className="icon d-flex align-items-center justify-content-center">
<BsEnvelopeAtFill className="icon-img"/>

</div>
<div className="text pl-3">
<p><span>Email:</span> <Link to="/"><span className="__cf_email__" >karthik@ccmb.res.in </span></Link></p>
</div>
</div>
<div className="dbox w-100 d-flex align-items-center">
<div className="icon d-flex align-items-center justify-content-center">
<span className="fa fa-globe"></span>
<BsGlobeAmericas className="icon-img"/>
</div>
<div className="text pl-3">
<p><span>Website</span> <Link to="/">https://www.ccmb.res.in/ </Link></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
  )
}

export default Contact