import React from 'react'
import Navbar from '../navbar/Navbar'
import { FiShoppingCart } from 'react-icons/fi';
import Product from '../../pages/Product/Product'
import { SimpleGrid, Box, Heading,Flex,Icon} from '@chakra-ui/react'

export default function Menu() {
  return (
    <>
      <Navbar />
      <Flex justifyContent='space-between'>
        <Heading as='h2' p='10' size='2xl'>
          Menu Item
        </Heading>
        <Box display='flex' justifyContent='center' alignItems='center' mr='20'>
          <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
        </Box>
      </Flex>
      <SimpleGrid minChildWidth='250px' spacing={2} p='10'>
        <Box><Product /></Box>
        <Box><Product /></Box>
        <Box><Product /></Box>
        <Box><Product /></Box>
        <Box><Product /></Box>
        <Box><Product /></Box>
      </SimpleGrid>
    </>
  )
}
