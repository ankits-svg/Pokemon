import React from 'react'

import { Box, Heading } from '@chakra-ui/react'

import { Loader } from './Components/Head/Loader'
import { ListData } from './Components/AllData/ListData'
import { Booked } from './Components/Head/Booked'


export const App = () => {
  return (
    <Box>
      <Loader/>
      
      <Booked/>
     
      <ListData/>
    </Box>
  )
}
