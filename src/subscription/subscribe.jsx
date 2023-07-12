import { createStyles, Image, Accordion, Grid, Col, Container, Title,  Input, useMantineTheme, ActionIcon, Group, Paper, Center, Box, Button, Card, CardSection
} from '@mantine/core';

import {
 IconUser,IconMoon,
} from '@tabler/icons-react';
import { useState } from 'react';
import { FiBell } from 'react-icons/fi';
import NavbarNested from '../bars/Navbar';
import './subscribe.css'
import Header from '../bars/header';


const useStyles = createStyles((theme) => ({
 wrapper: {
   paddingTop: `calc(${theme.spacing.xl} * 2)`,
  
 },

 title: {
   marginBottom: theme.spacing.md,
   paddingLeft: theme.spacing.md,
   color: theme.colorScheme === 'dark' ? theme.white : theme.black,
   fontFamily: `Greycliff CF, ${theme.fontFamily}`,
 },

 item: {
   fontSize: theme.fontSizes.sm,
   color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
 },
 

}));

const placeholder =
 'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export default function Subscription() { 
 
const theme = useMantineTheme();
const [searchValue, setSearchValue] = useState('');

const handleSearch = () => {
 // Implement your search logic here
 console.log('Search query:', searchValue);
};

const handleChange = (event) => {
 setSearchValue(event.target.value);
};




 const { classes } = useStyles();
 return (
   <div className={classes.wrapper}>
    <Grid>
      
      <Grid.Col span={3} style={{marginTop:'-48px'}} className="navbar-col" >
      <NavbarNested />
      </Grid.Col>
      <Grid.Col span={9} className="content-col" >
<Grid style={{marginTop:'-48px'}}>
    <Grid.Col span={4} style={{color:'#868E96'}}>
    <Group position="relative" style={{ maxWidth: '300px', margin: '0 auto' }}> 
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

<Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Upgrade Your Plan
      </Title>
      <Grid gutter={30}>
        <Grid.Col span={4}>
          <Card>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md" >
          <Center>
      <b>Silver Plan</b>
       </Center>
       <Center>
       <p>1000 Calls</p>
       </Center>
       <Center>
       <Box maw={100} mx="auto">
      <Image
        radius="md"
        src="https://storeassets.im-cdn.com/products/af11d2/wqK1UW3TRDG6Z6wOJB3h_silver.jpg"
        alt="Random unsplash image"
      />
    </Box>
       </Center>
       <Center>
        <strong>500$</strong><p>/1000 calls</p>
       </Center>
        <hr />
        <Center>
          <strong>Takes 1 day time for calls</strong>
        </Center>
        <Center>
          <Button fullWidth style={{backgroundColor: '#4E8480', marginTop: '10px'}}>
              Subscribe
          </Button>
        </Center>
      </Paper>
      </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Center>
      <b>Gold Plan</b>
       </Center>
       <Center>
       <p>5000 Calls</p>
       </Center>
       <Center>
       <Box maw={100} mx="auto">
      <Image
        radius="md"
        src="https://mrhomegenius.com/wp-content/uploads/2020/08/images.png"
        alt="Random unsplash image"
      />
    </Box>
       </Center>
       <Center>
        <strong>800$</strong><p>/5000 calls</p>
       </Center>
        <hr />
        <Center>
          <strong>Takes 2 day time for calls</strong>
        </Center>
        <Center>
          <Button fullWidth style={{backgroundColor: '#4E8480', marginTop: '10px'}}>
              Subscribe
          </Button>
        </Center>
      </Paper>
      </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Center>
      <b>Platinum Plan</b>
       </Center>
       <Center>
       <p>10,000 Calls</p>
       </Center>
       <Center>
       <Box maw={100} mx="auto">
      <Image
        radius="md"
        src="https://mrhomegenius.com/wp-content/uploads/2020/08/Platinum-Badge.png"
        alt="Random unsplash image"
      />
    </Box>
       </Center>
       <Center>
        <strong>1600$</strong><p>/10,000 calls</p>
       </Center>
        <hr />
        <Center>
          <strong>Takes 3 day time for calls</strong>
        </Center>
        <Center>
          <Button fullWidth style={{backgroundColor: '#4E8480', marginTop: '10px'}}>
              Subscribe
          </Button>
        </Center>
      </Paper>
      </Card>
        </Grid.Col>
      </Grid>
      </Grid.Col>
      </Grid>
   </div>
  
 );
}