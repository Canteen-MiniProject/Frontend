import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Box,
    Flex,
    Button,
    Heading,
    useColorModeValue,
    Tr,
    Th,
    Icon,
    Td,
    TableCaption,
    TableContainer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    ModalCloseButton,
    Input,
    FormControl,
    FormLabel,
    ButtonGroup,
} from '@chakra-ui/react'
import Navbar from "../navbar/Navbar"
import {DeleteIcon} from '@chakra-ui/icons';
import {MdModeEditOutline } from 'react-icons/md';

export default function Category() {
    return (
        <>
            <Navbar />
            <Box p='2' borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')} borderBottom={1}>
                <Flex h={16} p='8' alignItems={'center'} justifyContent={'space-between'} >
                    <Box w='100' gap='30px' display='flex' alignItems={'center'} justifyContent={'center'}>
                        <Heading as='h2' size='md' noOfLines={1}>
                            Total Orders
                        </Heading>
                    </Box>
                </Flex>
            </Box>
            <TableContainer p='9'>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th fontSize='1.5rem'>Sr. No.</Th>
                            <Th fontSize='1.5rem'>Food Name</Th>
                            <Th fontSize='1.5rem'>Price</Th>
                            <Th fontSize='1.5rem'>Type</Th>
                            <Th isNumeric fontSize='1.5rem'>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Dosa</Td>
                            <Td>25</Td>
                            <Td>Non Veg</Td>
                            <Td isNumeric>
                                <ButtonGroup>
                                    <Button><DeleteIcon/></Button>
                                    <Button><Icon as={MdModeEditOutline}/></Button>
                                </ButtonGroup>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}
