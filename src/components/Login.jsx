import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container h={'100vh'} maxW={'container.xl'} p={'16'}>
      <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full', '96']}
        margin={'auto'}
        my={'16'}
      >
        <Heading>Welcome Back!</Heading>

        <Input
          placeholder={'Email'}
          type={'email'}
          required
          focusBorderColor={'purple.500'}
        />
        <Input
          placeholder={'Password'}
          type={'password'}
          required
          focusBorderColor={'purple.500'}
        />

        <Button variant={'link'} alignSelf={'flex-end'}>
          <Link to="/forgetpassword">Forget Password?</Link>
        </Button>

        <Button colorScheme={'purple'} type={'submit'}>
          Log In
        </Button>

        <Text textAlign={'right'}>
          New User? {" "}
          <Button colorScheme={'purple'} variant={'link'}>
            <Link to="/SignUp">Sign Up</Link>
          </Button>
        </Text>
      </VStack>
    </Container>
  );
};

export default Login;
