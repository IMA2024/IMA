import React from 'react';
import { Box, Button, SimpleGrid, Grid, Input, useMantineTheme, ActionIcon, Group, Image, AspectRatio } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import {
    IconBulb,
    IconUser,
    IconCheckbox,
    IconSearch,
    IconPlus,
    IconSelector,
    IconMoon,
    IconHome2,
    IconMessage2,
    IconLocation,
    IconBrandWhatsapp,
    IconPhoneCall
    
  } from '@tabler/icons-react';
  import { useState } from 'react';
  import { FiBell } from 'react-icons/fi';
  import BusinessOwnerHeader from '../bars/BusinessOwnerHeader';
  import NavbarNested from '../bars/Navbar';
  import { useNavigate, Link } from 'react-router-dom';
  import './Navbar.css'
 
  
  

const BusinessOwnerView = () => {

    const [searchValue, setSearchValue] = useState('');
  const theme = useMantineTheme();

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search query:', searchValue);
  };


  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/AddBusiness');
 };
  
 


  
  return (
    
    <div>
      <Grid>
      <Grid.Col span={3}  className="navbar-col" >
      <NavbarNested />
      </Grid.Col>
      <Grid.Col span={9} className="content-col" >
      <BusinessOwnerHeader />
    <Box padding={20} shadow="sm" radius="md" background="white" ml={20} mt={20} mr={20} >
     
<SimpleGrid cols={6}  mt={40}  ml={5} mr={51}>
    <Button  onClick={handleSubmit} style={{backgroundColor:'#4E8480', width: '200px', color:'white'}} >Edit Business</Button>
</SimpleGrid>
<Grid mt={20} columns={24} breakpoints={{ sm: 768, md: 992, lg: 1200 }} >
      <Grid.Col xl={3} lg={8} sm={2} md={7} ></Grid.Col>
      <Grid.Col mt={20} xl={18} lg={16} sm={20} md={14} style={{ minWidth: 360 }}>
        <strong>Some Images of The Businesses/Products Marketed by IMA</strong>
      </Grid.Col>
      <Grid.Col xl={3} lg={0} sm={2} md={7}></Grid.Col>
    </Grid>
    <Carousel maw={620} mx="auto" withIndicators mt={20}>
      <Carousel.Slide >
      <Image
    radius="md"
    src="https://plus.unsplash.com/premium_photo-1675324517011-24d2c741c22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    alt="Random unsplash image"
    
  />
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
    radius="md"
    src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    alt="Random unsplash image"
  
  />
      </Carousel.Slide>
      <Carousel.Slide>
      <Image
    radius="md"
    src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    alt="Random unsplash image"
   
  />
      </Carousel.Slide>  
    </Carousel>
    
    </Box>
    </Grid.Col>
    </Grid>
    <Box padding={20} shadow="sm" radius="md" background="white" ml={20} mt={20} mr={20} >
    <Grid mt={40}>
        <Grid.Col offset={.5} span={8}><strong>Decimal Real Estate and Builders</strong></Grid.Col>
        <Grid.Col  offset={.5}span={3}><strong>Get in Touch</strong></Grid.Col>
    </Grid>
    <Grid mt={5}>
        <Grid.Col offset={.5} span={8}>Mr. Tehseen Riaz Abbasi</Grid.Col>
        <Grid.Col  offset={.5}span={3}></Grid.Col>
    </Grid>
    <Grid mt={5}>
        <Grid.Col offset={.5} span={8} ><span><IconHome2></IconHome2><span>Pakistan</span></span></Grid.Col>
        <Grid.Col  offset={.5}span={3} ><span><IconMessage2></IconMessage2><span>TRA.Real@gmail.com</span></span></Grid.Col>
    </Grid>
    <Grid >
        <Grid.Col offset={.5} span={8} ><span><IconLocation></IconLocation><span>Islamabad</span></span></Grid.Col>
        <Grid.Col  offset={.5}span={3} ><span><IconBrandWhatsapp></IconBrandWhatsapp><span>Islamabad</span></span></Grid.Col>
    </Grid>
    <Grid >
        <Grid.Col offset={.5} span={8} ><span><IconPhoneCall></IconPhoneCall><span>+923456876532</span></span></Grid.Col>
        <Grid.Col  offset={.5}span={3} ><span><IconPhoneCall></IconPhoneCall><span>051 6663457</span></span></Grid.Col>
    </Grid>
    <div >
    <AspectRatio ratio={16 / 9} mt={20} style={{ height:'400px'}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        style={{ border: 0, width: '100%', height: '400px' }}
      />
    </AspectRatio>
    </div>
    <span style={{marginBottom:'1px' , backgroundColor:'pink'}}><p><strong>Description</strong><br></br>Best Real Estate Business Partners.</p></span>
    </Box>
    </div>
   
  );
};

export default BusinessOwnerView;
