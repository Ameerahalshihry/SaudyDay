import { ReactNode } from 'react';
import React from 'react'
import {useNavigate } from 'react-router-dom'
import Search from './Search'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Links = ['الصفحة الرئيسية', 'تاريخنا ', 'رؤيتنا', 'فعالياتنا', 'أكلنا'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()
  const [searchField, setSearchField] =React.useState<any>("");

  const logout = () =>{
    navigate('/')
    // localStorage.clear()
  }
  const handleChange =(e: { target: { value: any; }; }) =>{
    setSearchField(e.target.value);

  }
  function searchList() {
    return (
      <>
      <Search word={searchField} />
      </>
    );
  }

  return (
    <>
      <Box  
          borderBottomWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.400', 'gray.800')}
        px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-dQd_ndMp5wD7mzrJepRG3nqExdrVpZ9SZw&usqp=CAU" w={10} borderRadius={50} ></Image>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
              >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Box>
          <InputGroup>
              <InputLeftElement pointerEvents="none">
              </InputLeftElement>
              <Input type="text" placeholder="بحث ..."   onChange = {handleChange}/>
            </InputGroup>
            {searchList}
          </Box>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              bg={'green'}
              _hover={{
                bg: 'green.700',
              }}
              color={'white'}
              size={'sm'}
              mr={4}
              onClick={logout}>
تسجيل خروج            </Button>
           
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}