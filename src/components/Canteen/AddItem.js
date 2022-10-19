import React from 'react'
import Navbar from '../navbar/Navbar'
import {
    Box,
    Flex,
    Heading,
    Button,
    Select,
    useColorModeValue,
    FormLabel,
    Icon,
    Tag,
    TagLabel,
    TagCloseButton,
    SimpleGrid,
} from '@chakra-ui/react';
import { MdFilterAlt } from 'react-icons/md';
import Product from "../../pages/Product/Product"

export default function AddItem() {
    return (
        <>
            <Navbar />
            <Box p='2' borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')} borderBottom={1}>
                <Flex h={16} p='8' alignItems={'center'} justifyContent={'space-between'} >
                    <Box w='100' gap='30px' display='flex' alignItems={'center'} justifyContent={'center'}>
                        <Heading as='h2' size='lg' noOfLines={1}>
                            Add Item
                        </Heading>
                    </Box>
                    <Button colorScheme='teal'>
                        + Add Item
                    </Button>
                </Flex>
            </Box>
            <Box p='8' display='flex' alignItems='center' gap='20px'>
                <FormLabel>Filter  <Icon as={MdFilterAlt} /></FormLabel>
                <Select placeholder='Select option' w='2xl'>
                    <option value='option1'>All</option>
                    <option value='option2'>Breakfast</option>
                </Select>
                {/* <Tag
                    size='lg'
                    borderRadius='full'
                    variant='solid'
                    colorScheme='grey'
                >
                    <TagLabel>Breakfast</TagLabel>
                    <TagCloseButton />
                </Tag> */}
            </Box>
            <Box p='8'>
                <SimpleGrid minChildWidth='250px' spacing={2} p='10'>
                    <Box><Product /></Box>
                    <Box><Product /></Box>
                    <Box><Product /></Box>
                    <Box><Product /></Box>
                    <Box><Product /></Box>
                    <Box><Product /></Box>
                </SimpleGrid>
            </Box>
        </>
    )
}
