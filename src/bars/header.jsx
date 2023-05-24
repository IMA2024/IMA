import './header.css'
import { useState, button } from 'react';



function Header() {
 

    return (
      
    <div class="header">
    <a href="/BusinessOwnerView" class="logo">IMA</a>
    <div class="header-right">
      <a class="home" href="/BusinessOwnerView">Home</a>
      <a href="/FaqWithBg"class="space">About</a>
      <a href="/EmailBanner"class="space">Services</a>
      <a href="/FaqWithBg" class="space">Team</a>
      <a href="/ContactIcons" class="space">Contact Us</a>
      <a href="/SignIn" class="space">Sign In</a>
      <a href="/SignUp" class="space">Sign Up</a>
    </div>
   
  </div>

  
    )
  }
  
  export default Header