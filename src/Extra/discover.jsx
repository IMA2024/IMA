import { useState, button} from 'react';
import './discover.css'
import { Button, MantineProvider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Header from '../bars/header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Discover() {

return (

<div class="discover">
   <div class="discover1">
    <div class="dtext"><p class="dtext1">Ensure Your Business</p><p class="dtext1">Continuity & Service Levels</p></div>
    <div class="dbutton"><Button class="dbutton1">Discover More</Button></div>
   </div>
   <div class="aboutIma">
    <div class="services">
      <b class="ima">ABOUT IMA</b>
      <p class="imaDetail">IMA provides marketing automation such as email marketing, social<br></br>media marketing and lead generation. With the help of artificially<br></br>intelligent agents marketing is done in an efficient way.</p>
      <div class="percentHead"><b>Customer Service</b><b class="percentage">70%</b></div>
      <p class="forLine"><hr class="line"></hr></p>
      <div class="percentHead"><b>Sales/Lead Generation</b><b class="percentage2">70%</b></div>
      <p class="forLine2"><hr class="line"></hr></p>
      <div class="percentHead"><b>Social Media Marketing</b><b class="percentage3">70%</b></div>
      <p class="forLine"><hr class="line"></hr></p>
      <div class="percentHead"><b>Customer Satisfaction</b><b class="percentage4">70%</b></div>
      <p class="forLine4"><hr class="line"></hr></p>
    </div>
    <div class="slide2"><img class="slide2img" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FsbCUyMGNlbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="alternatetext"></img></div>
   </div>
   <div class="steps">
    <b class="start">How To Get<br/> Started?</b>
    <p class="fourStep">Four Easy Steps</p>
    <div class="forSteps">
      <b>Register Your<br/>Business</b>
      <b>Make Business<br/>Questionnaire</b>
      <b>Select Your<br/>Business</b>
      <b>Start Business<br/>Making</b>
      </div>
      <div class="forStepNumber">
        <span class="num1">01</span><span><hr class="line1"></hr></span>
        <span class="num1">02</span><span><hr class="line2"></hr></span>
        <span class="num1">03</span><span><hr class="line3"></hr></span>
        <span class="num1">04</span><span><hr class="line4"></hr></span>
      </div>
   </div>
   <div class="serviceOffer">
    <div class="offer">
      <b class="start1">Some Of The<br/> Services We Offer</b>
      <p class="expertise">Our Expertise</p>
      <p class="imaDetail2">From social media to email marketing, IMA is<br></br>a  all in one marketing product. It provides a <br></br>comprehensive solution for all your marketing<br></br>needs</p>
      <div class="viewmore"><Button class="viewmore1">View More</Button></div>
      </div>
      
    <div class="cards">
      <div class="row1">
        <div class="card1"><p>gdshgjhg</p><p>yreuryeuy</p><p>wteywtwy</p><i class="fa fa-car"></i><i class="fa-brands fa-instagram"></i></div>
        <div class="card2"></div>
        </div>
      <div class="row2"></div>
</div>
    </div>
   
  </div>
  
    )
  }
  
  export default Discover