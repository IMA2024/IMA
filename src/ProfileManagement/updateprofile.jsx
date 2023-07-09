import { TextInput, Checkbox, Button, Group, Box, SimpleGrid, Center , Title, Container, Paper, Anchor, Text, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';
import Header from '../bars/header';
import { useNavigate, Link } from 'react-router-dom';

function Update() {

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
  const [errorMessage4, setErrorMessage4] = useState('');
  const [errorMessage5, setErrorMessage5] = useState('');
  const [errorMessage6, setErrorMessage6] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const options = [
    { value: 'super admin', label: 'super admin' },
    { value: 'marketing agent', label: 'marketing agent' },
    { value: 'business owner', label: 'business owner' },
    { value: 'customer', label: 'customer' },
  ];

  useEffect(() => {
    if(errorMessage1){
      if(/^[a-zA-Z]{1,15}$/.test(fname)) {
        setErrorMessage1('');
      }
    }
    if(errorMessage2){
      if(/^[a-zA-Z]{1,15}$/.test(lname)) {
        setErrorMessage2('');
      }
    }
  
    if(errorMessage6){
      if (/^\d{11}$/.test(phone)) {
        setErrorMessage6('');
      }
    }
  }, [fname, lname, email, password, confirmPassword, phone]);

  const navigate = useNavigate();
    
  const navigateToSignIn = () => {
    // 👇️ navigate to /contacts
    if (isLoggedIn == true) {
      navigate('/SignIn');
    }
    
  };


  function handleFnameChange(event) {
    setFname(event.target.value);
  }

  function handleLnameChange(event) {
    setLname(event.target.value);
  }



  function handleConfirmPhoneChange(event) {
    setPhone(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    if(!/^[a-zA-Z]{1,15}$/.test(fname)) {
      setErrorMessage1('Invalid first name');
      setIsLoggedIn(false);
     
    }
    if(!/^[a-zA-Z]{1,15}$/.test(lname)) {
      setErrorMessage2('Invalid last name');
      setIsLoggedIn(false);
     
    }
   
    if (!/^\d{11}$/.test(phone)) {
      setErrorMessage6('Invalid phone number');
      setIsLoggedIn(false);
    
    }
    if(/^[a-zA-Z]{1,15}$/.test(fname) && /^[a-zA-Z]{1,15}$/.test(lname) && /^\d{11}$/.test(phone)){
        setIsLoggedIn(true);
        return;
    }
    
    // Add code here to submit the form data to your backend server or perform other actions.
  }
  
  const form = useForm({
  });
  
  return (
    <div> 
      <Header />
    <Box  px={100}>
      <Title
      mt={20}
      mb={10}
        align="center" 
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Update Profile
      </Title>
      
     
    <Center>
    <Paper withBorder shadow="md" p={30} mt={10} radius="md" >
      <form  onSubmit={handleSubmit} >
     
      <SimpleGrid cols={2}>
        <span>
        <TextInput
          withAsterisk
          label="Change First Name"
          placeholder="first name"
          value={fname} onChange={handleFnameChange}
          mb={10}
        />
        {errorMessage1 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage1}</p>}
        </span>
        <span>
        <TextInput
          withAsterisk
          label="Change Last Name"
          placeholder="last name"
          value={lname} onChange={handleLnameChange}
          mb={10}
        />
        {errorMessage2 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage2}</p>}
        </span>
</SimpleGrid>

         <TextInput
          withAsterisk
          label="Change Phone Number"
          placeholder="phone number"
          value={phone} onChange={handleConfirmPhoneChange}
          mb={10}
        />
        {errorMessage6 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage6}</p>}
        
        <Group position="center" mt="md" >
          <Button onClick={navigateToSignIn} type="submit" fullWidth style={{ backgroundColor: '#4E8480'}}>Submit</Button>
        </Group>
        {isLoggedIn && <p  style={{ color: 'blue', fontSize: '13px', textAlign: 'center' }}>Profile Updated!</p>}
      </form>
      </Paper>
      </Center>
     
    </Box>
    </div>
  );
}

export default Update