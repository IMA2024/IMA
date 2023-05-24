import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius:'0%',
    marginTop: 0.6,
    
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: theme.white,
    lineHeight: 1.6,
    fontSize: rem(50),
    marginTop: theme.spacing.xs,
    width: 700,
    paddingBottom: 100,
    
    
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  
}));



function Card({ image, title, category }) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})`, opacity:0.9 }}
      className={classes.card}
    >
      <div>  
        <Title order={3} className={classes.title} style={{ color: '#fff', marginTop: 30 }}>
          {title}
        </Title>
      </div>
     
      
      
    </Paper>
  );
}

const data = [

  {
    image:
      'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'Innovative Solutions For Modern Marketing',
    category: 'beach',
  },
  {
    image:
      'https://plus.unsplash.com/premium_photo-1658527008322-919cc69c5931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'Innovative Solutions For Modern Marketing',
    category: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1533750088811-7a8b16218df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'Innovative Solutions For Modern Marketing',
    category: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    title: 'Innovative Solutions For Modern Marketing',
    category: 'nature',
  },
  
];

function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="100%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(0) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 1}
    >
      {slides}
    </Carousel>
  );
}

export default CardsCarousel