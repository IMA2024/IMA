import React, { useState } from 'react';
import { Container, Text, Paper, Grid,Title } from '@mantine/core';
import Header from '../bars/header';

function UserInformationPage() {
  const [userInfo] = useState({
    firstName: 'Laraib',
    lastName: 'Saghir',
    email: 'saghirlaraib@gmail.com',
    phoneNumber: '03339876123',
    role: 'Business Owner'
  });

  const userInformationStyle = {
    //display: 'grid',
    //gridTemplateColumns: 'max-content 1fr',
    //gridGap: '10px',
    marginBottom: '40px', // Increased spacing between user information items
    
    
  };

  const labelStyle = {
    fontWeight: 500,
    alignSelf: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    // display: 'flex',
    // flexDirection: 'row',
   
  };

  const valueStyle = {
    fontWeight: 400,
    color: 'rgba(0, 0, 0, 0.85)',
    
    
  };

  return (
    <div>
      <Header />
    <Container size="sm" mt={50}  >
       <Title
       mb={30}
        align="center" 
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        View Profile
      </Title>
      <Paper padding="lg" shadow="sm" style={{backgroundColor: '#F1F1F1'}}>
       
          <Grid  style={userInformationStyle}>
        <Grid.Col span={3} offset={3}>
          <Text style={labelStyle}>First Name:</Text>
          </Grid.Col>
          <Grid.Col span={6} >
          <Text style={valueStyle}>{userInfo.firstName}</Text>
          </Grid.Col>
          </Grid>
        

        <Grid  style={userInformationStyle}>
        <Grid.Col span={3} offset={3}>
        <Text style={labelStyle}>Last Name:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
          <Text style={valueStyle}>{userInfo.lastName}</Text>
          </Grid.Col>
          </Grid>
       
        <Grid  style={userInformationStyle}>
        <Grid.Col span={3} offset={3}>
        <Text style={labelStyle}>Email:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
          <Text style={valueStyle}>{userInfo.email}</Text>
          </Grid.Col>
          </Grid>
   
          <Grid  style={userInformationStyle}>
          <Grid.Col span={3} offset={3}>
        <Text style={labelStyle}>Phone Number:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
          <Text style={valueStyle}>{userInfo.phoneNumber}</Text>
          </Grid.Col>
          </Grid>
          <Grid  style={userInformationStyle}>
          <Grid.Col span={3} offset={3}>
        <Text style={labelStyle}>Role:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
          <Text style={valueStyle}>{userInfo.role}</Text>
          </Grid.Col>
          </Grid>

      </Paper>
    </Container>
    </div>
  );
}

export default UserInformationPage;
