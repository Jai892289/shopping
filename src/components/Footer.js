import React from 'react';
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillEnvironment } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-col">
        <div className="row-col" >
  <div className="column" >
    <p style={{color:'white' , textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
    </p>
  </div>



  <div className="column" >
  <h2 style={{color:'white', fontSize:'20px'}}>OUR SERVICES </h2>
  <NavLink to="/home">Home</NavLink><br />
  <NavLink to="/about">About</NavLink><br />
  <NavLink to="/product">Product</NavLink><br />
  <NavLink to="/contact">Contact</NavLink>
  </div>


  <div className="column" >
  <h2 style={{color:'white', fontSize:'20px'}}>OUR PRODUCTS</h2>
  <p style={{color:'white' , fontSize:'15px'}}>IPhone 12 Pro  </p>
  <p style={{color:'white' , fontSize:'15px'}}>IPhone 12   </p>
  <p style={{color:'white' , fontSize:'15px'}}>IPhone 12 Pro  </p>
  <p style={{color:'white' , fontSize:'15px'}}>IPhone 11  </p>
  <p style={{color:'white' , fontSize:'15px'}}>IPhone 8  </p>
  </div>




  <div className="column" >
    <h2 style={{color:'white', fontSize:'20px'}}>CONTACT US</h2>
    <p style={{color:'white'}}><AiFillPhone style={{color:'white'}} /> +91-4653146513</p>
    <p style={{color:'white'}}><AiFillMail style={{color:'white'}} /> xyz@gmail.com</p>
    <p style={{color:'white'}}><AiFillEnvironment style={{color:'white'}} /> India</p>
  </div>
</div>
            
        </div>
    )
}

export default Footer
