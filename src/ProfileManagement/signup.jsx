import { TextInput, Checkbox, Button, Group, Box, SimpleGrid, Center , Title, Container, Paper, Anchor, Text, Select, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../bars/header';

function Signup() {
    
  const [yess, setYes] = useState('yes');
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
    if(errorMessage3){
      if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setErrorMessage3('');
      }
    }
    if(errorMessage4){
      if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
        setErrorMessage4('');
      }
    }
    if(errorMessage5){
      if (password == confirmPassword) {
        setErrorMessage5('');
      }
    }
    if(errorMessage6){
      if (/^\d{11}$/.test(phone)) {
        setErrorMessage6('');
      }
    }
  }, [fname, lname, email, password, confirmPassword, phone]);


  function handleFnameChange(event) {
    setFname(event.target.value);
  }

  function handleLnameChange(event) {
    setLname(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  function handleConfirmPhoneChange(event) {
    setPhone(event.target.value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    if(!/^[a-zA-Z]{1,15}$/.test(fname)) {
      setErrorMessage1('Invalid first name');
      setIsLoggedIn(false);
      setYes('No');
     
    }
    if(!/^[a-zA-Z]{1,15}$/.test(lname)) {
      setErrorMessage2('Invalid last name');
      setIsLoggedIn(false);
      setYes('No');
     
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMessage3('Invalid email format');
      setIsLoggedIn(false);
      setYes('No');
    }
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      setErrorMessage4('Invalid password');
      setIsLoggedIn(false);
      setYes('No');
    }
    if (password !== confirmPassword) {
      setErrorMessage5('Passwords do not match');
      setIsLoggedIn(false);
      setYes('No');
    }
    if (!/^\d{11}$/.test(phone)) {
      setErrorMessage6('Invalid phone number');
      setIsLoggedIn(false);
      setYes('No');
    }
    if(yess == 'No') {
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
    <Box  px={100} mt={30} >
      <Title
        align="center" 
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Sign Up
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account account?{' '}
        <Anchor size="sm" component={Link} to="/SignIn">
          Login
        </Anchor>
      </Text>
     
    <Center>
    <Paper withBorder shadow="md" p={30} mt={10} radius="md" >
      <form  onSubmit={handleSubmit} >
      <Select
      data={options}
      placeholder="Select an option"
      label="Select an option"
      value={selectedOption}
      onChange={setSelectedOption}
      clearable
      searchable
    />
      <SimpleGrid cols={2}>
        <span>
        <TextInput
          withAsterisk
          label="First Name"
          placeholder="first name"
          value={fname} onChange={handleFnameChange}
          // onChange={(e)=> {e.target.value}}
          mb={10}
        />
        {errorMessage1 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage1}</p>}
        </span>
        <span>
        <TextInput
          withAsterisk
          label="Last Name"
          placeholder="last name"
          value={lname} onChange={handleLnameChange}
          mb={10}
        />
        {errorMessage2 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage2}</p>}
        </span>
</SimpleGrid>
<TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          value={email} onChange={handleEmailChange}
          mb={10}
        />
        {errorMessage3 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage3}</p>}
       
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="password"
          value={password} onChange={handlePasswordChange}
          mb={10}
        />
        {errorMessage4 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage4}</p>}
        <PasswordInput
          withAsterisk
          label="Confirm Password"
          placeholder="confirm password"
          value={confirmPassword} onChange={handleConfirmPasswordChange}
          mb={10}
        />
        {errorMessage5 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage5}</p>}
         <TextInput
          withAsterisk
          label="Phone Number"
          placeholder="phone number"
          value={phone} onChange={handleConfirmPhoneChange}
          mb={10}
        />
        {errorMessage6 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage6}</p>}
        <Checkbox
          mt="md"
          label="I agree to terms and conditions"
          // {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />
        <Group position="center" mt="md" >
          <Button type="submit" fullWidth style={{ backgroundColor: '#4E8480'}}>Submit</Button>
        </Group>
        {isLoggedIn && <p  style={{ color: 'blue', fontSize: '13px', textAlign: 'center' }}>Signup Successful!</p>}
      </form>
      </Paper>
      </Center>
     
    </Box>
    </div>
   
  );
}

export default Signup