import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React  from 'react';
import {useState} from 'react';
import vid1 from '../assets/pexels-peter-fowler-6394054.mp4';
import vid2 from '../assets/production ID_4816732.mp4';
import vid3 from '../assets/video.mp4';

const Videos = () => {

    // MPP1wlLYjmDvycgPO5wnj6tRTqxLsRCLT3rZUvrmrXCzbT4Dgtuu5qrV
    // GET https://api.pexels.com/videos/search


    // const [query, setQuery] = useState('frogs')
    // const vids=()=>{
    //     const response =await fetch(`https://api.pexels.com/videos/search&query=${}`)
    // }
    const vids=[vid1,vid2, vid3];
    const [videoSrc, setVideoSrc] = useState(vids[0]);
    
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={['full', 'xl']}>
        <video
          controls
          controlsList="nodownload"
          src ={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'5'} w={'full'} overflowX={'auto'}>
          <Heading>{`Sample Video 1`}  </Heading>
          <Text>
            Upload your vids here. Here the description of you vids goes here
            tenetur minus tempore ad qui quia porro eum explicabo magni magnam
            voluptate magnam. Nesciunt ipsum accusantium ducimus sed minus
            deleniti veniam explicabo, incidunt facere numquam tempora odio! m,
            quis, est modi neque quia? Eligendi mollitia necessitatibus minima,
            porro libero nobis praesentium recusandae labore deserunt dolore!
          </Text>
        </VStack>

        
      </VStack>


      <VStack
          w={['full', 'xl']}
          alignItems={'stretch'}
          p={'10'}
          spacing={'10'}
          overflowY={'auto'}
        >
           {
            vids.map((item,index)=>{
                return (
                    <Button variant={'ghost'}
                    colorScheme={'purple'}
                    onClick={()=>{setVideoSrc(item)}}
                    > 
                    Lecture {index+1}
                    </Button>
                )
            })
           }
        </VStack>
    </Stack>

  
  );
};

export default Videos;
