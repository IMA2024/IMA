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
  Grid,
  Textarea,
} from '@mantine/core';
import Header from '../bars/header';

export function UpdateQuestion() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');
  const [question5, setQuestion5] = useState('');
  const [question6, setQuestion6] = useState('');
  const [question7, setQuestion7] = useState('');
  const [question8, setQuestion8] = useState('');
  const [isFilled, setIsNotFilled] = useState(false);


  const handleSubmit = () => {
  
    if(question1.trim() !== '' && question2.trim() !== '' && question3.trim() !== '' && question4.trim() !== '' && question5.trim() !== '' && question6.trim() !== '' && question7.trim() !== '' && question8.trim() !== ''){
        setIsNotFilled(true); 
    }

  };

  return (
    <div>
      <Header />
    <Container size={920} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Update Agents Configuration
      </Title>
      <Paper withBorder shadow="xl" p={30} mt={30} radius="md" >
        <Grid gutter={50}>
            <Grid.Col span={6}>
        <TextInput label="What kind of property are you interested in ? (residential, commercial)" placeholder="you@mantine.dev" value={question1} onChange={(e) => setQuestion1(e.target.value)} />
        </Grid.Col>
        <Grid.Col span={6}>
        <TextInput label="What kind of property are you interested in ? (residential, commercial)" placeholder="Your password"  value={question2} onChange={(e) => setQuestion2(e.target.value)} />
        </Grid.Col>
        </Grid>
        <Grid gutter={50}>
            <Grid.Col span={6}>
        <TextInput label="What kind of property are you interested in ? (residential, commercial)" placeholder="you@mantine.dev"  value={question3} onChange={(e) => setQuestion3(e.target.value)} />
        </Grid.Col>
        <Grid.Col span={6}>
        <TextInput label="What kind of property are you interested in ? (residential, commercial)" placeholder="Your password"  value={question4} onChange={(e) => setQuestion4(e.target.value)} />
        </Grid.Col>
        </Grid>
        <Grid gutter={50}>
            <Grid.Col span={6}>
        <TextInput label="What kind of property are you interested in ? (residential, commercial)" placeholder="you@mantine.dev"  value={question5} onChange={(e) => setQuestion5(e.target.value)} />
        </Grid.Col>
        <Grid.Col span={6}>
        <TextInput label="What kind of property are you interested in ? (residential, commercial)" placeholder="Your password"  value={question6} onChange={(e) => setQuestion6(e.target.value)} />
        </Grid.Col>
        </Grid>
        <Grid gutter={50}>
            <Grid.Col span={6}>
        <TextInput label="What kind of property are you interested in ? (residential, commercial)" placeholder="you@mantine.dev" value={question7} onChange={(e) => setQuestion7(e.target.value)} />
        </Grid.Col>
        <Grid.Col span={6}>
        <TextInput label="What kind of property are you interested in ? (residential, commercial)" placeholder="Your password"  value={question8} onChange={(e) => setQuestion8(e.target.value)} />
        </Grid.Col>
        </Grid>
        <Grid gutter={50}>
            <Grid.Col span={12}>
        <Textarea label="Additional Information For Agent" placeholder="you@mantine.dev"  />
        </Grid.Col>
        </Grid>
        <div style={{align: 'center', justifyContent: 'center', display:'flex'}}>
        <Button align="center" mt="xl" onClick={handleSubmit} style={{ backgroundColor: '#4E8480', paddingLeft:'100px', paddingRight:'100px'}} >
          Submit Questionnaire
        </Button>
        </div>
        {isFilled && <p  style={{ color: 'blue', fontSize: '13px', textAlign: 'center' }}>Questions Updated Successfully!</p>}
      </Paper>
    </Container>
    </div>
  );
}


export default UpdateQuestion