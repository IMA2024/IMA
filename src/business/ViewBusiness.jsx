import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Accordion, Grid, Col,  Title,  Input, useMantineTheme, ActionIcon, Group
 } from '@mantine/core';
import {
    IconUser,IconMoon,
  } from '@tabler/icons-react';
  import { useState } from 'react';
  import { FiBell } from 'react-icons/fi';
  import Header from '../bars/header';

const mockdata = [
  {
    title: 'Located in Islamabad',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
    date: 'Owned by Mr. Saad',
  },
  {
    title: 'Located in Karachi',
    image:
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    date: 'Owned by Mr. Yusuf',
  },
  {
    title: 'Located in Chitral',
    image:
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    date: 'Owned by Mr. Yahya',
  },
  {
    title: 'Located in Swat',
    image:
      'https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
    date: 'Owned by Mr. Ehrar',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export  default function ViewBusiness() {
  const { classes } = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const theme = useMantineTheme();

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search query:', searchValue);
  };
  
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <div>
      <Header />
    <Container py="xl" >
        <Grid style={{marginTop:'-25px', marginBottom:'30px'}}>
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
      <SimpleGrid cols={2} mt={30} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
    </div>
  );
}