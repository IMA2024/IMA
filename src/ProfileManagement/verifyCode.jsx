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
  
  export function Verification() {
    const [code, setCode] = useState('');
    const [errorMessage3, setErrorMessage3] = useState('');
    const [success, setSuccess] = useState(false);
    const { classes } = useStyles();

    const navigate = useNavigate();
    
    const navigateToResetPass = () => {
      // 👇️ navigate to /contacts
      if (code.length!= 0) {
        navigate('/ForgetPassword');
      }
      
    };

    function handleCodeChange(event) {
        setCode(event.target.value);
      }

      function handleSubmit(event) {
        event.preventDefault();
         setSuccess(true);
        return;
        // Add code here to submit the form data to your backend server or perform other actions.
      }
      

    const form = useForm({
       
      });
    
  
    return (
      <div>
        <Header />
      <Container size={460} my={30}>
        <Title className={classes.title} align="center">
          Forgot your password?
        </Title>
        <Text c="dimmed" fz="sm" ta="center">
          Enter verification code to reset your password
        </Text>
  
        <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={handleSubmit}>
          <TextInput label="Verification Code"  value={code} onChange={handleCodeChange}  required />
          {errorMessage3 && <p style={{ color: 'red', fontSize: '13px' }}>{errorMessage3}</p>}
          <Group position="apart" mt="lg" className={classes.controls}>
            <Anchor color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <IconArrowLeft size={rem(12)} stroke={1.5} />
                <Box ml={5}>Back to the enter email page</Box>
              </Center>
            </Anchor>
            <Button type='submit' onClick={navigateToResetPass} style={{ backgroundColor: '#4E8480'}}>Reset password</Button>
          </Group>
          {success && <p  style={{ color: 'blue', fontSize: '13px', textAlign: 'center' }}>Code Verified</p>}
          </form>
        </Paper>
      </Container>
      </div>
    );
  }

  export default Verification