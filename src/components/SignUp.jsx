import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const SignUp = () => {
    return (
      <Container h={'100vh'} maxW={'container.xl'} p={'16'}>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          margin={'auto'}
          my={'5'}
        >
          <Heading alignItems={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'20'}/>
  
          <Input
            placeholder={'Name'}
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
        
  
       
          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
  
          <Text textAlign={'right'}>
            Already a user? {" "}
            <Button colorScheme={'purple'} variant={'link'}>
              <Link to="/login">Log In</Link>
            </Button>
          </Text>
        </VStack>
      </Container>
    );
  };
  

  

export default SignUp;