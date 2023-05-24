import { createStyles, Image, Accordion, Grid, Col, Container, Title,  Input, useMantineTheme, ActionIcon, Group
 } from '@mantine/core';

import {
  IconUser,IconMoon,
} from '@tabler/icons-react';
import { useState } from 'react';
import { FiBell } from 'react-icons/fi';
import Header from '../bars/header';


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

export default function FaqWithImage() { 
  
const theme = useMantineTheme();
const [searchValue, setSearchValue] = useState('');

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
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
          <Image
        radius="md"
        src="https://hyphenscs.com/static/media/FAQs-pana%201.47750602.png"
        alt="Random unsplash image"
      
      />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>How can I reset my password?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>Can I create more that one account?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>How can I subscribe to monthly newsletter?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="credit-card">
                <Accordion.Control>
                  Do you store credit card information securely?
                </Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="payment">
                <Accordion.Control>What payment systems to you work with?</Accordion.Control>
                <Accordion.Panel>{placeholder}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
    </div>
  );
}