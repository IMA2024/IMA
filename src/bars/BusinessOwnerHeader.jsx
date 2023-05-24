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
 
  
  
  
  
const BusinessOwnerHeader = () => {

    const [searchValue, setSearchValue] = useState('');
  const theme = useMantineTheme();

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search query:', searchValue);
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };


  
  return (
    
    <Box padding={20} shadow="sm" radius="md" background="white" ml={20} mt={20} mr={20} >
     <Grid>
     <Grid.Col span={4} style={{color:'#868E96'}}>
     <Group style={{ maxWidth: '300px', margin: '0 auto' }} > 
      <Input
        value={searchValue}
        onChange={handleChange}
        placeholder="Search"
        rightSection={
          <ActionIcon
            onClick={handleSearch}
            radius="lg"
            style={{ cursor: 'pointer' }}
            padding="xs"
            size="xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              
              viewBox="0 0 24 24"
              fill="none"
              stroke={
                theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5]
              }
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </ActionIcon>
          
        }
      />
    </Group>
    </Grid.Col>
    <Grid.Col span={1} offset={5}>
    <ActionIcon size="lg">
        <FiBell />
      </ActionIcon>
      </Grid.Col>
      <Grid.Col span={1}>
      <ActionIcon size="lg">
        <IconMoon></IconMoon>
      </ActionIcon>
      </Grid.Col>
      <Grid.Col span={1}>
      <ActionIcon size="lg">
        <IconUser></IconUser>
      </ActionIcon>
      </Grid.Col>
</Grid>

    
    </Box>
   
  );
};

export default BusinessOwnerHeader;
