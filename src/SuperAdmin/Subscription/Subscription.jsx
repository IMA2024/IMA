import { createStyles, Image, Accordion, Grid, Col, Container, Title,  Input, useMantineTheme, ActionIcon, Group, Paper, Center, Box, Button, Card, CardSection, Modal, TextInput
} from '@mantine/core';

import {
 IconUser,IconMoon,
} from '@tabler/icons-react';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { FiBell } from 'react-icons/fi';
import NavbarNested from '../../bars/Navbar';




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

export default function Subscribe() { 
 
const theme = useMantineTheme();
const [searchValue, setSearchValue] = useState('');
const [opened, { open, close }] = useDisclosure(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [isModalOpen3, setIsModalOpen3] = useState(false);


const [calls1, setCalls1] = useState(200);
const [rupees1, setRupees1] = useState(11);
const [plan1, setPlan1] = useState('Silver Plan');

const [calls2, setCalls2] = useState(300);
const [rupees2, setRupees2] = useState(22);
const [plan2, setPlan2] = useState('Gold Plan');

const [calls3, setCalls3] = useState(300);
const [rupees3, setRupees3] = useState(22);
const [plan3, setPlan3] = useState('Platinum Plan');

  

const handleSearch = () => {
 // Implement your search logic here
 console.log('Search query:', searchValue);
};

const handleChange = (event) => {
 setSearchValue(event.target.value);
};

function handleCalls1(event) {
  setCalls1(event.target.value);
}

function handleRupees1(event) {
  setRupees1(event.target.value);
}

function handlePlan1(event) {
  setPlan1(event.target.value);
}

function handleCalls2(event) {
  setCalls2(event.target.value);
}

function handleRupees2(event) {
  setRupees2(event.target.value);
}

function handlePlan2(event) {
  setPlan2(event.target.value);
}

function handleCalls3(event) {
  setCalls3(event.target.value);
}

function handleRupees3(event) {
  setRupees3(event.target.value);
}

function handlePlan3(event) {
  setPlan3(event.target.value);
}

const { classes } = useStyles();
 return (
   <div className={classes.wrapper}>
    <Grid>
      
      <Grid.Col span={12} className="content-col" >
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
      <b>{plan1}</b>
       </Center>
       <Center>
       <p>{calls1} Calls</p>
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
        <strong>{rupees1}$</strong><p>/{calls1} calls</p>
       </Center>
        <hr />
        <Center>
          <strong>Takes 1 day time for calls</strong>
        </Center>
        <Center>
          <Button fullWidth style={{backgroundColor: '#4E8480', marginTop: '10px'}}
          onClick={() => {
            open();
          }}
          >
              Edit
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
       <p>{calls2} Calls</p>
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
       <strong>{rupees2}$</strong><p>/{calls2} calls</p>
       </Center>
        <hr />
        <Center>
          <strong>Takes 2 day time for calls</strong>
        </Center>
        <Center>
          <Button fullWidth style={{backgroundColor: '#4E8480', marginTop: '10px'}}
           onClick={() => {
            setIsModalOpen2(true);
          }}
          >
              Edit
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
       <p>{calls3} Calls</p>
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
       <strong>{rupees3}$</strong><p>/{calls3} calls</p>
       </Center>
        <hr />
        <Center>
          <strong>Takes 3 day time for calls</strong>
        </Center>
        <Center>
          <Button fullWidth style={{backgroundColor: '#4E8480', marginTop: '10px'}}
          onClick={() => {
            setIsModalOpen3(true);
          }}
          >
              Edit
          </Button>
        </Center>
      </Paper>
      </Card>
        </Grid.Col>
      </Grid>
      </Grid.Col>
      </Grid>
      <Modal  opened={opened} onClose={close}  size="sm"  style={{ display:'flex', justifyContent:'center' }}>
      <div style={{display: 'flex', justifyContent: 'left', fontFamily: 'serif', fontWeight: 'bold', fontSize: 30}}>
            Subscription Details
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 20}}>
             {plan1}
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 20}}>
              <TextInput label='Calls' value={calls1} onChange={handleCalls1} ></TextInput>
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 10}}>
            <TextInput label='Price' value={rupees1} onChange={handleRupees1}></TextInput>
            </div>
            <div style={{display:'flex', justifyContent:'right' }}>
            <Button style={{fontFamily: 'serif', fontSize: 20, marginTop: 10}}onClick={close}>Save</Button>
            </div>
      </Modal>
      <Modal
      opened={isModalOpen2}
      onClose={() => setIsModalOpen2(false)}
      title="Modal 1"
      size="sm"  style={{ display:'flex', justifyContent:'center' }}
    >
      <div style={{display: 'flex', justifyContent: 'left', fontFamily: 'serif', fontWeight: 'bold', fontSize: 30}}>
            Subscription Details
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 20}}>
             {plan2}
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 20}}>
              <TextInput label='Calls' value={calls2} onChange={handleCalls2} ></TextInput>
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 10}}>
            <TextInput label='Price' value={rupees2} onChange={handleRupees2}></TextInput>
            </div>
            <div style={{display:'flex', justifyContent:'right' }}>
            <Button style={{fontFamily: 'serif', fontSize: 20, marginTop: 10}}onClick={() => setIsModalOpen2(false)}>Save</Button>
            </div> 
  </Modal>
  <Modal
      opened={isModalOpen3}
      onClose={() => setIsModalOpen3(false)}
      title="Modal 3"
      size="sm"  style={{ display:'flex', justifyContent:'center' }}
    >
      <div style={{display: 'flex', justifyContent: 'left', fontFamily: 'serif', fontWeight: 'bold', fontSize: 30}}>
            Subscription Details
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 20}}>
             {plan3}
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 20}}>
              <TextInput label='Calls' value={calls3} onChange={handleCalls3} ></TextInput>
            </div>
            <div style={{fontFamily: 'serif', fontSize: 20, marginTop: 10}}>
            <TextInput label='Price' value={rupees3} onChange={handleRupees3}></TextInput>
            </div>
            <div style={{display:'flex', justifyContent:'right' }}>
            <Button style={{fontFamily: 'serif', fontSize: 20, marginTop: 10}}onClick={() => setIsModalOpen3(false)}>Save</Button>
            </div> 
  </Modal>
   </div>
  
 );
}