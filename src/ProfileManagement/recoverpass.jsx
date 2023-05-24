import { TextInput, Checkbox, Button, Group, Box, SimpleGrid, Center , Title, Container, Paper, Anchor, Text, Select, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../bars/header';

function ForgetPassword() {


  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [errorMessage3, setErrorMessage3] = useState('');
  const [errorMessage4, setErrorMessage4] = useState('');
  const [errorMessage5, setErrorMessage5] = useState('');
  const [errorMessage6, setErrorMessage6] = useState('');
  
  
  useEffect(() => {
    
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
    
  }, [ password, confirmPassword ]);


  const navigate = useNavigate();
    
  const navigateToSignIn = () => {
    // 👇️ navigate to /contacts
    if (isLoggedIn == true) {
      navigate('/SignIn');
    }
    
  };

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  

  function handleSubmit(event) {
    event.preventDefault();
    
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
      setErrorMessage4('Invalid password');
      setIsLoggedIn(false);
      
    }
    if (password !== confirmPassword) {
      setErrorMessage5('Passwords do not match');
      setIsLoggedIn(false);
      
    }
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password) && (password == confirmPassword)){
    setIsLoggedIn(true);
    }
    return;
    // Add code here to submit the form data to your backend server or perform other actions.
  }
  
  const form = useForm({
  });
  
  return (
    <div>
      <Header />
    <Box  px={100}  size={420} mt={60}>
      <Title
        align="center" 
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Forget Password
      </Title>
    
     
    <Center>
    <Paper  withBorder shadow="md" p={30} mt={30} radius="md" style={{ width: '40%', minWidth: '40%'}} >
      <form  onSubmit={handleSubmit}  >
        <PasswordInput
          withAsterisk
          label="New Password"
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
         
        
        <Group position="center" mt="md" >
          <Button type="submit"  onClick={navigateToSignIn}  fullWidth style={{ backgroundColor: '#4E8480'}}>Submit</Button>
        </Group>
        {isLoggedIn && <p  style={{ color: 'red', fontSize: '13px', textAlign: 'center' }}>Password Saved!</p>}
      </form>
      </Paper>
      </Center>
   
    </Box>
    </div>
  );
}

export default ForgetPassword