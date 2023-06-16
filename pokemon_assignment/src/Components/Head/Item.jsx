import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

export const Item = (el) => {
  // const [booked, setBooked] = useState(false);
  // let arr=JSON.parse(localStorage.getItem("bookmark")) || []
  // const handleRemove=({id})=>{
  //   setBooked(!booked);
  //   arr.splice(id, 1);
  //   localStorage.setItem("bookmark", JSON.stringify(arr));
  // }
  return (
    <Box>
        {/* <Text>{el.id}.{el.name}</Text> */}
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>


  <Flex justifyContent={'space-around'}>
    <CardBody>
      <Heading size='md' color={'teal'} _hover={{color:"gray"}}>{el.id}-{el.name.toUpperCase()}</Heading>

      {/* <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text> */}
    </CardBody>

    {/* <CardFooter>
      <Button variant='solid' colorScheme='orange' onClick={()=>handleRemove(el.id)}>
        Remove
      </Button>
    </CardFooter> */}
  </Flex>
</Card>
    </Box>
  )
}
