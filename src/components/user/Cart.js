import {
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  NumberInput,
  NumberInputField,
  Text,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Center,
  Divider,
  Button,
  Image,
  Icon
} from '@chakra-ui/react'
import React from 'react'
import Navbar from '../navbar/Navbar'
import SupportedCard from '../../Images/SupportedCards.png'
import { BsCreditCard2BackFill,BsCashStack } from 'react-icons/bs';
import './Cart.css'

export default function ItemPage() {
  return (
    <>
      <Navbar />
      <Flex flexDirection='row' justifyContent='space-between' p='5'>
        <div className='responsive-div'> 
          <Box w='100%' h='100%' p='5' borderColor='white' border='1px' borderRadius='8px'>
            <Heading as='h2' fontSize='2.8rem' noOfLines={1}>Food Cart</Heading>
            <Center>
              <Divider orientation='horizontal' />
            </Center>
            <TableContainer mt='14'>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                    <Th fontSize='lg'></Th>
                    <Th fontSize='lg'>Photo</Th>
                    <Th fontSize='lg'>Name</Th>
                    <Th fontSize='lg'>Price</Th>
                    <Th fontSize='lg'>Quantity</Th>
                    <Th fontSize='lg' isNumeric>SubTotal</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>x</Td>
                    <Td>inches</Td>
                    <Td>inches</Td>
                    <Td>inches</Td>
                    <Td>
                      <NumberInput w='16' defaultValue={1} min={0} max={5}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput></Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th></Th>
                    <Th></Th>
                    <Th isNumeric></Th>
                    <Th isNumeric></Th>
                    <Th isNumeric fontSize='lg'>Grand Total</Th>
                    <Th isNumeric fontSize='lg'></Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
          {/* <Center height='600'>
            <Divider orientation='vertical' />
          </Center> */}
          <Box w='100%' h='100%' p='6'>
            <Heading as='h2' fontSize='2.4rem' noOfLines={1}>Billing</Heading>
            <Center >
              <Divider orientation='horizontal' />
            </Center>
            <Box p='10' display='flex' justifyContent='space-between'>
              <Text fontSize='2xl'>Grand Total</Text>
              <Text fontSize='2xl'><strong>₹55</strong></Text>
            </Box>
            <Center >
              <Divider orientation='horizontal' />
            </Center>
            <Text fontSize='2xl' mt='5'>WE ACCEPT:</Text>
            <Image src={SupportedCard} alt='' />
            <Button colorScheme='teal' w='100%' mt='10' size='lg'><Icon as={BsCreditCard2BackFill}/>&nbsp;&nbsp;Pay</Button>
            <Divider orientation='horizontal' mt='8' />
            <Button colorScheme='teal' w='100%' mt='10' size='lg'><Icon as={BsCashStack}/> &nbsp;&nbsp;Pay By Cash</Button>
          </Box>
        </div>
      </Flex>
    </>
  )
}
