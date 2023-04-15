import { Box, Container, Heading, Image, Img, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import { Stack } from '@chakra-ui/react';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'}   minH={'100vh'}  p='16' centerContent>
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          w='full'
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
          overflow-x={'hidden'}
        >
          <Image src={img5} h={['40', '350']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            blanditiis exercitationem suscipit officiis va molestias, nobis
            accusamus soluta, qui porro commodi vitae tempora. Cum
            o eius fuga? Quam aliquam, ipsam qua consequuntur,
            unde eius impedit, ut facis iste possimus molestiae dolorem?
            Doloribus quis praesentium facere, quasi explicabo ipsa
            reprehenderit quas, veniam nesciunt asperiores ipsam, itaque
            eligendi quo! Eligendi!
          </Text>
        </Stack>
      </Container>

      {/* <Container minH={'100vh'} bgColor={'red'} minW={'container'}></Container> */}
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
      >
        <Box w={'full'} h={'100vh'}>
          <Img src={img1} h={'full'} w={'full'} objectFit={'cover'}/>
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          <Img src={img2} h={'full'} w={'full'} objectFit={'cover'}/>
          <Heading
            bgColor={'whiteAlpha.900'}
            color={'black'}
            {...headingOptions}
          >
            Future is Gaming
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          <Img src={img3} h={'full'} w={'full'} objectFit={'cover'}/>
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOptions}
          >
            Gaming on Console
          </Heading>
        </Box>

        <Box w={'full'} h={'100vh'}>
          <Img src={img4} h={'full'} w={'full'} objectFit={'cover'}/>
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'black'}
            {...headingOptions}
          >
            Night Life is Cool
          </Heading>
        </Box>
      </Carousel>
    </>
  );
};

export default Home;
