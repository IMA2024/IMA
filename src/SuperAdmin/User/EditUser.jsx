import { createStyles, Image, Accordion, Grid, Col, Container, Title, Box, Button, SimpleGrid, Input, useMantineTheme, ActionIcon, Group, AspectRatio,
    TextInput,
      PasswordInput,
      Checkbox,
      Anchor,
      Paper,
      Text,
      Select,
      FileInput,
      Flex,  
  } from '@mantine/core';
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
   IconPhoneCall,
   IconStar 
  } from '@tabler/icons-react';
  import { useState, useEffect } from 'react';
  import { FiBell } from 'react-icons/fi';
  import Header from '../../bars/header';
  
  
  const useStyles = createStyles((theme) => ({
   wrapper: {
     paddingTop: `calc(${theme.spacing.xl} * 2)`,
     paddingBottom: `calc(${theme.spacing.xl} * 2)`,
     
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
  
  export default function EditUser() { 
  
  
  const [searchValue, setSearchValue] = useState('');
  
  const theme = useMantineTheme();
  
  const options = [
    { value: 'superadmin', label: 'super admin' },
    { value: 'marketingagent', label: 'marketing agent' },
    { value: 'businessowner', label: 'business owner' },
    { value: 'customer', label: 'customer' },
  ];
  
    const [errorMessage1, setErrorMessage1] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const [errorMessage4, setErrorMessage4] = useState('');
    const [errorMessage5, setErrorMessage5] = useState('');
    const [errorMessage6, setErrorMessage6] = useState('');
    const [errorMessage7, setErrorMessage7] = useState('');
    const [errorMessage8, setErrorMessage8] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    const [selectedOption, setSelectedOption] = useState('');
    const [fname, setFname] = useState('');
    const [address,setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
      if(errorMessage1){
        if(/^[a-zA-Z]{1,30}$/.test(selectedOption)) {
          setErrorMessage1('');
        }
      }
      if(errorMessage2){
        if(/^([a-zA-Z]+\s*)*$/.test(fname)) {
          setErrorMessage2('');
        }
      }
      if(errorMessage4){
        if(/^\d{11}$/.test(phone)) {
          setErrorMessage4('');
        }
      }
      if(errorMessage5){
        if(/^[a-zA-Z]{1,20}$/.test(country)) {
          setErrorMessage5('');
        }
      }
      if(errorMessage6){
        if(/^[a-zA-Z]{1,20}$/.test(city)) {
          setErrorMessage6('');
        }
      }
      if(errorMessage7){
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
          setErrorMessage7('');
        }
      }
      if(errorMessage8){
        if (password == confirmPassword) {
          setErrorMessage8('');
        }
      }
     
    }, [selectedOption, fname, phone, city, country, password, confirmPassword]);
  
   
  
    function handleFnameChange(event) {
      setFname(event.target.value);
    }
  
    function handleAddress(event) {
      setAddress(event.target.value);
    }
  
    function handleConfirmPhoneChange(event) {
      setPhone(event.target.value);
    }
  
    function handleCountry(event) {
      setCountry(event.target.value);
    }
  
    function handleCity(event) {
      setCity(event.target.value);
    }
  
    function handlePasswordChange(event) {
      setPassword(event.target.value);
    }
  
    function handleConfirmPasswordChange(event) {
      setConfirmPassword(event.target.value);
    }
  
  
    function handleSelectedOption(event) {
      setSelectedOption(event.target.value);
    }
  
    const isSelectionValid = (selectedOption) => {
      const regex = /^[a-zA-Z]{1,30}$/;
      return regex.test(selectedOption);
    };
  
    const isNameValid = (fname) => {
      const regex = /^([a-zA-Z]+\s*)*$/;
      return regex.test(fname);
    };
  
    const isPhoneValid = (phone) => {
      const regex = /^\d{11}$/;
      return regex.test(phone);
    };
  
    const isCountryValid = (country) => {
      const regex = /^[a-zA-Z]{1,20}$/;
      return regex.test(country);
    };
  
    const isCityValid = (country) => {
      const regex = /^[a-zA-Z]{1,20}$/;
      return regex.test(country);
    };
  
    const isPasswordValid = (password) => {
      const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      return regex.test(password);
    };
  
    const isConfirmPasswordValid = (confirmPassword) => {
    if (password == confirmPassword) {
      return confirmPassword;
    }
    };
  
    
  
  
    const handleSubmit = () => {
     
  
      if ( !isSelectionValid(selectedOption)) {
        setErrorMessage1('invalid business')
        
      }
  
  
      if ( !isNameValid(fname)) {
        setErrorMessage2('invalid name')
        
      }
  
      if ( !isPhoneValid(phone)) {
        setErrorMessage4('invalid phone')
        
      }
  
      if ( !isCountryValid(country)) {
        setErrorMessage5('invalid country')
      }
  
      if ( !isCityValid(city)) {
        setErrorMessage6('invalid city')
        return;
      }
  
      if ( !isPasswordValid(password)) {
        setErrorMessage7('invalid password')
        return;
      }
  
      if ( !isConfirmPasswordValid(confirmPassword)) {
        setErrorMessage8('invalid confirm password')
        return;
      }
  
  
      if  (isSelectionValid(selectedOption) && isNameValid(fname) && isPhoneValid(phone) && isCountryValid(country) && isCityValid(city) && isPasswordValid(password) && isConfirmPasswordValid(confirmPassword)) {
        setIsLoggedIn(true);
      }
  
      history.push('/EditUser', { data });
  
    };
   
    const handleFileChange = (files) => {
      setSelectedFile(files[0]);
    };
  
    const handleUpload = async () => {
      if (!selectedFile) {
        return;
      }
  
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const response = await fetch('your-upload-endpoint', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          console.log('gknjnkk');
        } else {
          throw new Error('Upload failed');
        }
      } catch (error) {
        alert('Error uploading the picture');
      }
    };
  
  const handleSearch = () => {
   // Implement your search logic here
   console.log('Search query:', searchValue);
  };
  
  const handleChange = (event) => {
   setSearchValue(event.target.value);
  };
  
  
   const { classes } = useStyles();
   return (
    <div>
      <Header />
     <div className={classes.wrapper}>
  <Grid style={{marginTop:'-45px', marginBottom:'30px'}}>
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
  <Container size={700} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Enter User's Details
        </Title>
     
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Container align="center" mt={15} style={{width:140}}>
            {/*
          <div>
        <FileInput
          style={{ display: 'flex', alignItems: 'center', height:80, flexDirection:'row' }}
          label="Upload Picture"
          accept="image/*"
          onChange={handleFileChange}
          value={selectedFile ? selectedFile.name : ''}
          icon={<IconUser size="120" style={{ margin: '0 auto' }} />}
        />
  
        <Button disabled={!selectedFile} onClick={handleUpload}>
          Upload
        </Button>
      </div>
        */}
          </Container>
          <Grid >
          <Grid.Col span={6} >
           <Select
           withAsterisk
          data={options}
          placeholder="Select an option"
          label="Select an option"
          value={selectedOption}
          onChange={setSelectedOption}
          clearable
          searchable
          required
          mb={10}
          size='lg'
         
      />
      
    
       {errorMessage1 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage1}</p>}
          </Grid.Col>
          <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Full Name"
            placeholder="full name"
            value={fname} onChange={handleFnameChange}
            mb={10}
            size='lg'
          />
          {errorMessage2 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage2}</p>}
          </Grid.Col>
          
          </Grid>
          <Grid>
          <Grid.Col span={6} >
          <TextInput
            withAsterisk
            label="Address"
            placeholder="Address"
            required
            value={address} onChange={handleAddress}
            mb={10}
            size='lg'
          />
         
          </Grid.Col>
          <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Phone Number"
            placeholder="phone number"
            value={phone} onChange={handleConfirmPhoneChange}
            mb={10}
            size='lg'
          />
          {errorMessage4 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage4}</p>}
          </Grid.Col>
          </Grid>
          <Grid>
          <Grid.Col span={6} >
          <TextInput
            withAsterisk
            label="Country"
            placeholder="Country"
            required
            value={country} onChange={handleCountry}
            mb={10}
            size='lg'
          />
          {errorMessage5 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage5}</p>}
          </Grid.Col>
          <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="City"
            placeholder="City"
            required
            value={city} onChange={handleCity}
            mb={10}
            size='lg'
          />
          {errorMessage6 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage6}</p>}
          </Grid.Col>
          <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Password"
            placeholder="Password"
            required
            value={password} onChange={handlePasswordChange}
            mb={10}
            size='lg'
          />
          {errorMessage7 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage7}</p>}
          </Grid.Col>
          <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Confirm Password"
            placeholder="Confirm Password"
            required
            value={confirmPassword} onChange={handleConfirmPasswordChange}
            mb={10}
            size='lg'
          />
          {errorMessage8 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage8}</p>}
          </Grid.Col>
          </Grid>
          <div>
        <FileInput
          style={{ display: 'flex', alignItems: 'center', height:80,  }}
          accept="image/*"
          onChange={handleFileChange}
          size='lg'
          value={selectedFile ? selectedFile.name : ''}
          icon={<IconUser size="lg" style={{ display: 'flex', justifyContent: 'center', marginLeft: '10' }} />}
        />
  
        <Button disabled={!selectedFile} onClick={handleUpload}>
          Upload
        </Button>
      </div>
          <Button fullWidth mt="xl" onClick={handleSubmit} style={{ backgroundColor: '#4E8480'}} >
            Complete
          </Button>
          {isLoggedIn && <p  style={{ color: 'blue', fontSize: '13px', textAlign: 'center' }}>Profile Completion Successful</p>}
        </Paper>
      </Container>
     </div>
     </div>
   );
  }