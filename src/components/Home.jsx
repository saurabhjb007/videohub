import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={16}>
        <Heading
          py={2}
          w={'fit-content'}
          borderBottom={'2px solid'}
          textTransform={'uppercase'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={4}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            textAlign={'center'}
            p={['4', '16']}
          >
            Discover, learn, and enjoy as you embark on a journey of exploration
            through the world. Start watching and let your curiosity take the
            lead!"Our commitment to quality means that each video is
            meticulously crafted to provide you with an enriching experience.
            Immerse yourself in stunning visuals, expert insights, and engaging
            storytelling that will keep you coming back for more.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night is Pretty
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gamming is Life
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
