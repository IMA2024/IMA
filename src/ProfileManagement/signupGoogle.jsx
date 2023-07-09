import { useState, useEffect } from 'react';
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import Header from '../bars/header';

export function SignupGoogle() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(errorMessage1){
      if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(email)) {
        setErrorMessage1('');
      }
    }
    if(errorMessage2){
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
        setErrorMessage2('');
      }
    }
   
  }, [email, password]);

  const isEmailValid = (email) => {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    return regex.test(email);
  };

  const isPasswordValid = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (!isEmailValid(email)) {
      setErrorMessage1('Invalid email format');
     
    }

    if (!isPasswordValid(password)) {
      setErrorMessage2('Invalid password');
      return;
    }

    if  (isEmailValid(email) && isPasswordValid(password)) {
      setIsLoggedIn(true);
    }

  };

  return (
    <div>
      <Header />
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Sign Up With Google
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" component={Link} to="/SignUp" >
          Create account
        </Anchor>
      </Text>
    

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required value={email} onChange={handleEmailChange} />
        {errorMessage1 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage1}</p>}
        <PasswordInput label="Password" placeholder="Your password" required mt="md" value={password} onChange={handlePasswordChange} />
        {errorMessage2 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage2}</p>}
        <Group position="apart" mt="lg" >
          <Checkbox label="Remember me" />
         
        </Group>
        <Button fullWidth mt="xl" onClick={handleSubmit} style={{ backgroundColor: '#4E8480'}} >
          Sign in
        </Button>
        {isLoggedIn && <p  style={{ color: 'blue', fontSize: '13px', textAlign: 'center' }}>Login Successful!</p>}
      </Paper>
    </Container>
    </div>
  );
}


export default SignupGoogle