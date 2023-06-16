import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Item } from './Item'


export const Booked = () => {
    const [data,setData]=useState(JSON.parse(localStorage.getItem("bookmark"))||[])
    
   
        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()
   

  return (
    <Box className='book'>
        
        <Button className='btn' ref={btnRef} colorScheme='orange' onClick={onOpen}>
        Bookmark Item
         </Button>
  
  <Drawer
  size={'sm'}
    isOpen={isOpen}
    placement='right'
    onClose={onClose}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>{`Bookmarked Item ${data.length}`}</DrawerHeader>

      <DrawerBody>
        {/* <Input placeholder='Type here...' /> */}
        <p>
        {data.length>0 && data.sort((a,b)=>a.id-b.id).map((el)=>{
            return <Item {...el} key={el.id}/>
        })}
        </p>
      </DrawerBody>

      <DrawerFooter>
        <Button variant='outline' mr={3} onClick={onClose}>
          Cancel
        </Button>
        {/* <Button colorScheme='blue'>Save</Button> */}
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
    </Box>
  )
}
