import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']}>
            Subscribe for more amazing content.
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter email here..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 200px 200px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppperCase'} text-textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'} alignSelf={'center'}>
            <a target="blank" href="https://github.com/ebe25">
              <AiFillGithub />
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'} size={'xl'}>
            <a
              target="blank"
              href="https://www.linkedin.com/in/vedansh-bisht-46675a192/"
            >
              <AiFillLinkedin />
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target="blank" href="https://www.instagram.com/vedansh.25/">
              <AiFillInstagram />
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
