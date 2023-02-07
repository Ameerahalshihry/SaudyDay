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
if(name.length >=3 && pass.length >=3){
localStorage.setItem("Name" ,name)
localStorage.setItem("Email" ,email)
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
            <Heading fontSize={'4xl'}>تسجيل جديد</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            الله يحييك معنا ✌️
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
                  تسجيل
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }