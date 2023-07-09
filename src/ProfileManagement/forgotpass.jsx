import {
    createStyles,
    Paper,
    Title,
    Text,
    TextInput,
    Button,
    Container,
    Group,
    Anchor,
    Center,
    Box,
    rem,
  } from '@mantine/core';
  import { IconArrowLeft } from '@tabler/icons-react';
  import { useForm } from '@mantine/form';
  import { useState, useEffect } from 'react';
  import { useNavigate, Link } from 'react-router-dom';
 import Header from '../bars/header';
  

  
  const useStyles = createStyles((theme) => ({
    title: {
      fontSize: rem(26),
      fontWeight: 900,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    controls: {
      [theme.fn.smallerThan('xs')]: {
        flexDirection: 'column-reverse',
      },
    },
  
    control: {
      [theme.fn.smallerThan('xs')]: {
        width: '100%',
        textAlign: 'center',
      },
    },
  }));
  
  export function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [errorMessage3, setErrorMessage3] = useState('');
    const [success, setSuccess] = useState(false);
    const { classes } = useStyles();

    const navigate = useNavigate();

    useEffect(() => {
        if(errorMessage3){
          if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage3('');
          }
        
        }        
      }, [email]);

      const navigateToVerification = () => {
        // 👇️ navigate to /contacts
        if (success == true) {
          navigate('/Verification');
        }
        
      };

    function handleEmailChange(event) {
        setEmail(event.target.value);
      }

      function handleSubmit(event) {
        event.preventDefault();
       
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setErrorMessage3('Invalid email format');
          setSuccess(false);
          
        }
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            
            setSuccess(true);
            
          }
       
        return;
        // Add code here to submit the form data to your backend server or perform other actions.
      }
      

    const form = useForm({
       
      });
    
  
    return (
      <div>
        <Header />
      <Container size={460} my={30} >
        <Title className={classes.title} align="center" mt={90}>
          Forgot your password?
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Enter your email to get verification code
        </Text>
  
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={handleSubmit}>
          <TextInput label="Your email" placeholder="me@mantine.dev" value={email} onChange={handleEmailChange}  required />
          {errorMessage3 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage3}</p>}
          <Group position="apart" mt="lg" className={classes.controls}>
            <Anchor color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft size={rem(12)} stroke={1.5} />
                <Box ml={5}>Back to the login page</Box>
              </Center>
            </Anchor>
            <Button type='submit' onClick={navigateToVerification} style={{ backgroundColor: '#4E8480'}}>Get Verification Code</Button>
          </Group>
          {success && <p  style={{ color: 'blue', fontSize: '13px', textAlign: 'center' }}>Email Verified</p>}
          </form>
        </Paper>
      </Container>
      </div>
    );
  }

  export default ForgotPassword