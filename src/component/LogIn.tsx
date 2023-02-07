import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function SimpleCard() {
    const [name , setName]= React.useState("")
    const [email , setEmail]= React.useState("")

    const [ pass , setPass ] = React.useState<any>()
const navigate = useNavigate()

    const getInfo = ()=>{
let name1 = localStorage.getItem("Name")
let email1= localStorage.getItem("Email")
if(name == name1 && pass.length >=3 && email==email1 ){

navigate("/saudiday")
}else{
    alert("Please enter correct information")
}
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>تسجيل دخول</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              آهلاً وسهلاً تفضل بالدخول ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
           
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id="name">
                <FormLabel>الاسم </FormLabel>
                <Input type="name" onChange={e =>{setName(e.target.value)}}/>
              </FormControl>
              <FormControl id="email">
                <FormLabel>البريد الالكتروني</FormLabel>
                <Input type="email"  onChange={e =>{setEmail(e.target.value)}}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>كلمة المرور</FormLabel>
                <Input type="password" onChange={e =>{setPass(e.target.value)}}/>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'green'}
                  _hover={{
                    bg: 'green.700',
                  }} 
                  color={'white'}
                  onClick={getInfo}>
                    أهلاً وسهلاً
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }