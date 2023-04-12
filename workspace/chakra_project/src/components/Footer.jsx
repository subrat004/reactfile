import { Box, Stack, VStack ,Heading, HStack, Button, Input,Text} from '@chakra-ui/react'
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size='md' textTransform={'uppercase'} textAlign={['center', 'left']} >Subscribe Here!!</Heading>
                <HStack>
                  <Input placeholder='Enter Email Here...' 
                   border={'none'}
                   borderRadius={'none'}
                   outline={'none'}
                   focusBorderColor='none'

                  ></Input>
                  <Button 
                   p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 15px 15px'} 
                  >
                    <AiOutlineSend size={20}></AiOutlineSend>
                  </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} 
              borderLeft={['none','1px solid white']}
              borderRight={['none','1px solid white']}

            
            >
              <Heading size={'md'} textTransform={'uppercase'}
              textAlign={"center"}>
                Video HUb
              </Heading>
              <Text>All rights recieved</Text>

            </VStack>
            
            
            <VStack w={'full'}

            >
              <Heading size={'md'} textTransform={"uppercase"}>
                Social Media
              </Heading>
              <Button variant={'link'} colorScheme='white' >
                <a target='black' href='https://youtube.com'> Youtube</a>
              </Button>
              <Button variant={'link'} colorScheme='white' >
                <a  target='black' href='https://instagram.com'>Instagram</a>
              </Button>
              <Button variant={'link'} colorScheme='white' >
                <a  target='black' href='https://github.com'> Github</a>
              </Button>

            </VStack>


        </Stack>
    </Box>
  )
}

export default Footer
