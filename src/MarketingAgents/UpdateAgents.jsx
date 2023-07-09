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
  Select,
} from '@mantine/core';
import Header from '../bars/header';


export function UpdateAgents() {
  
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
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [name, setName] = useState(null);

  const options = [
  
    { value: 'option1', label: 'Suna' },
    { value: 'option2', label: 'Ferhat' },
    { value: 'option3', label: 'Seira' },
  ];

  const gender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ]

  const question = [
    { value: 'questionaaire1', label: 'Questionaaire1' },
    { value: 'questionnaire2', label: 'Questionnaire2' },
  ]


  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const handleSelectGender = (value) => {
    setSelectedGender(value);
  };

  const handleSelectQuestion = (value) => {
    setSelectedQuestion(value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };



  const handleSubmit = () => {
  
    if(selectedOption.trim() !== '' && selectedGender.trim() !== '' && selectedQuestion.trim() !== '' && name.trim() !== '' ){
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
        Agents Configuration
      </Title>
      <Paper withBorder shadow="xl" p={30} mt={30} radius="md" >
        <Grid gutter={50}>
            <Grid.Col span={6}>
            <Select
      data={options}
      value={selectedOption}
      onChange={handleSelectChange}
      placeholder="Select an option"
      label="Agent Name"
    />
        </Grid.Col>
        <Grid.Col span={6}>
        <Select
      data={options}
      value={selectedOption}
      onChange={handleSelectChange}
      placeholder="Select an option"
      label="Agent Voice"
    />
        </Grid.Col>
        </Grid>
        <Grid gutter={50}>
            <Grid.Col span={6}>
            <Select
      data={gender}
      value={selectedGender}
      onChange={handleSelectGender}
      placeholder="Select an option"
      label="Agent Gender"
    />
        </Grid.Col>
        <Grid.Col span={6}>
        <Select
      data={question}
      value={selectedQuestion}
      onChange={handleSelectQuestion}
      placeholder="Select an option"
      label="Agent Questionnaire"
    />
        </Grid.Col>
        </Grid>
        <Grid gutter={50}>
            <Grid.Col span={12}>
        <TextInput label="Custom Agent Name" placeholder="you@mantine.dev"  value={name} onChange={handleName} />
        </Grid.Col>
        
        </Grid>
      
        <Grid gutter={50}>
            <Grid.Col span={12}>
        <Textarea label="Additional Information For Agent" placeholder="you@mantine.dev"  />
        </Grid.Col>
        </Grid>
        <div style={{align: 'center', justifyContent: 'center', display:'flex'}}>
        <Button align="center" mt="xl" onClick={handleSubmit} style={{ backgroundColor: '#4E8480', paddingLeft:'100px', paddingRight:'100px'}} >
          Submit Configuration
        </Button>
        </div>
        {isFilled && <p  style={{ color: 'blue', fontSize: '13px', textAlign: 'center' }}>Agents Configuration Successful!</p>}
      </Paper>
    </Container>
    </div>
  );
}


export default UpdateAgents