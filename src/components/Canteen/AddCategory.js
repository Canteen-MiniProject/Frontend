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
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Navbar />
            <Box p='2' borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.900')} borderBottom={1}>
                <Flex h={16} p='8' alignItems={'center'} justifyContent={'space-between'} >
                    <Box w='100' gap='30px' display='flex' alignItems={'center'} justifyContent={'center'}>
                        <Heading as='h2' size='md' noOfLines={1}>
                            Categories
                        </Heading>
                    </Box>
                    <Button colorScheme='teal' onClick={onOpen}>
                        + Add Category
                    </Button>
                </Flex>
            </Box>
            <TableContainer p='9'>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th fontSize='1.5rem'>Sr. No.</Th>
                            <Th fontSize='1.5rem'>Category</Th>
                            <Th isNumeric fontSize='1.5rem'>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Breakfast</Td>
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

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl p='2'>
                            <FormLabel>Add Category</FormLabel>
                            <Input type="text" />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' variant='outline' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='teal' mr={3}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
