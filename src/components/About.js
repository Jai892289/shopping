import React from 'react';
import { NavLink } from 'react-router-dom';
import image from "../images/pic1.jpg"

const About = () => {
    return (
        <div className="container py-5 my-5">
        <div className="row">
        <div className="col-md-6">
        <h1>About Us</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
         sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         <br />
         <br />
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
         but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
         sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
        <NavLink to ="/contact" className="btn btn-primary">Contact Us</NavLink>
        
         </div>

         <div className="col-md-6 d-flex justify-content-center">
        <img src= {image} width="500px" height="500px" alt="about"></img>
</div>
        
        </div>
        
            
        </div>
    )
}

export default About
